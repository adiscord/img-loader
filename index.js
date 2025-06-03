import fetch from "node-fetch";

import fs from "node:fs";
import { Buffer } from "node:buffer";
import data from "./data.js";

let i = 0;

Promise.all(data.map((url) => fetch(url))).then(async (results) => {
  results.forEach(async (result) => {
    const buffer = await result.buffer();

    const buffToSave = Buffer.from(buffer);

    fs.createWriteStream(`output/${i++}.png`).write(buffToSave);
  });
});
