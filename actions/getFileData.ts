"use server";

import { promises as fs } from "fs";
import path from "path";

export async function getFileData(filePath:string) {
    const file = await fs.readFile(path.resolve(filePath), "utf-8");
    return file;
}