const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (_req: any, res: any, _next: any) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (_req: any, res: any, _next: any) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((_req: any, res: any, _next: any) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
