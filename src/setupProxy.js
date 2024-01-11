// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Your API endpoint
    createProxyMiddleware({
      target: 'https://panelv2.cloudshope.com',
      changeOrigin: true,
    })
  );
};
