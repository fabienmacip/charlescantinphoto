module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7d82b96f8eb19ea83f0fd6013ca23454'),
  },
});
