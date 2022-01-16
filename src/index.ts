import "reflect-metadata";
import path from "path";
import { generateAPI } from "./utils/api-guide-generator";

import app from "./server";

generateAPI();

app.get("/", (_req, res) => {
  const filePath = path.join(process.cwd(), "src/public/api-guide.html");
  res.sendFile(filePath);
});
