import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { spec } from "./controllers/UserController";
import path from "path";

const app = createExpressServer({
  routePrefix: "/api",
  controllers: [path.join(__dirname + "/controllers/*.ts")],
});

app.get("/api-guide", (req, res): void => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(spec));
});

app.get("/", (req, res): void => {
  res.sendFile(__dirname + "/public/api-guide.html");
});

app.listen(3000);
