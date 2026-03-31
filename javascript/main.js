import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// read file
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
// split input token
const tokens = data.trim().split(/\s+/);
let index = 0;
const n = parseInt(tokens[index++]);
let res = [];
for (let i = 0; i < n; i++) {
  res.push(tokens[index++]);
}
console.log(res);

fs.writeFileSync(path.join(__dirname, "output.txt"), `${[...res]}`);
