let config = {
  PORT: 3000,
  MONGO: {
    PROTOCOL: "mongodb://",
    DOMAIN: "localhost",
    PORT: ":27017",
    BUCKET: "/taskBucket"
  }
};

module.exports = config;