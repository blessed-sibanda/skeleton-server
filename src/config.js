module.exports = {
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' +
      (process.env.IP || 'localhost') +
      ':' +
      (process.env.MONGO_PORT || '27017') +
      '/skeleton-server',
  jwtSecret: process.env.JWT_SECRET || 'my-secret',
};
