import fs from "fs";

export const writeFile = (content: any) => {
  fs.writeFileSync(`${process.cwd()}/src/public/spec.json`, content);
};
