const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(morgan("dev"));

app.use(
  "/Tweets",
  createProxyMiddleware({
    target: "http://tweets:8001",
    changeOrigin: true,
  })
);
app.use(
  "/Accounts",
  createProxyMiddleware({
    target: "http://accounts:8002",
    changeOrigin: true,
  })
);
app.listen(8000, () => {
  console.log("Gateway on port 8000");
});
