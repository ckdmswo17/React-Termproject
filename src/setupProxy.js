const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://127.0.0.1:8080",
      changeOrigin: true,
      //   ws: true,
      //   router: {
      //     "/socket.io": "ws://nginx:80",
      //   },
    })
  );
};
