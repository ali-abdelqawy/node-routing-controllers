import "reflect-metadata";
import path from "path";
import { generateAPIDoc } from "./utils";

import app from "./server";

// generateAPIDoc();

app.get("/", (_req, res) => {
  // const filePath = path.join(process.cwd(), "src/public/api-doc.html");
  // res.sendFile(filePath);
  res.send("Hello, World!");
});
