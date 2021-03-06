module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('CMS_URL', 'https://focal-freedom-329917.el.r.appspot.com'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f828b77bd8ba5e91cc97c6b6a61c8ee3'),
    },
  },
});
