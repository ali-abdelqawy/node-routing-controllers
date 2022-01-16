import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import { config } from "./config";
import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.resolve("./src/public")));

useExpressServer(app, {
  routePrefix: "/api",
  controllers: [path.join(__dirname + "/controllers/*.ts")],
});

app.listen(config.port, () => {
  console.log("server runing at port: " + config.port);
});

export default app;
