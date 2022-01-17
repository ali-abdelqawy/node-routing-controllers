import "reflect-metadata";
import path from "path";
import { generateAPIGuide } from "./utils";

import app from "./server";

// generateAPIGuide();

app.get("/", (_req, res) => {
  // const filePath = path.join(process.cwd(), "src/public/api-guide.html");
  // res.sendFile(filePath);
  res.send("Hello, World!");
});
