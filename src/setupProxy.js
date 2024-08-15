const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/ws',
      createProxyMiddleware({
        target: 'http://localhost:10047',
        changeOrigin: true,
      })
    );
  
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:10047',
        changeOrigin: true,
      })
    );
  };