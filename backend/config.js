export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/threesixtyrestaurant',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    PAYGATE_CLIENT_ID: process.env.PAYGATE_CLIENT_ID || 'sb'
}
