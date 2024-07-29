"use server";

import { promises as fs } from "fs";

export async function getFileData(filePath:string) {
    const file = await fs.readFile(filePath, "utf-8");
    return file;
}