import express from 'express'
import devBundle from './devBundle'
import path from 'path'
import template from './../template'
import { MongoClient } from 'mongodb'



let port = process.env.NODE_PORT || 3000
const mongo_url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
const CURRENT_WORKING_DIR = process.cwd()

const app = express()

devBundle.compile(app)


app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

MongoClient.connect(mongo_url, (err, db) => {
  console.log('Successfully connected to mongodb server.')
  db.close()
})

app.get('/', (req, res) => {
  res.status(200).send(template())
})

app.listen(port, function onStart(err) {
  if(err){
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})


