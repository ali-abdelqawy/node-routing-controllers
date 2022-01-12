import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import path from "path";

const app = createExpressServer({
  routePrefix: "/api",
  controllers: [path.join(__dirname + "/controllers/*.ts")],
});

app.listen(3000);
