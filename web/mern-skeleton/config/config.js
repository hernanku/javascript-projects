const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "jwt_secret",
    mongoUri: process.env.MONGODB_URI ||
        'mongodb://' + (process.env.MONGO_HOST || '10.0.0.57') + ':' +
        (process.env.MONGO_PORT || '27017') +
        '/mernproject'
}

export default config
