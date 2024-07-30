"use server";

import { promises as fs } from "fs";
import path from "path";

export async function getFileData(markdownPath:string, fileName:string) {
    const filePath = path.resolve(markdownPath + "/" + fileName);
    const file = await fs.readFile(filePath, "utf-8");
    return file;
}