import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
import devBundle from './devBundle'



app.listen(config.port, (err)=> {
    if(err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
    }
)

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {useNewUrlParser: true, useUnifiedTopology: true }).catch(error => console.log(error));
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

devBundle.compile(app)

