"use server";

import { formData } from "@/types";
import { getFileData } from "./getFileData";

export async function FormatThemeData(formData: formData, markdownPath: string, selectedTheme: string) {
    const filePath = `${markdownPath}\\${selectedTheme}`;
    const fileData = await getFileData(markdownPath, selectedTheme);
    let res: string = fileData;
    res = res.replace("${{name}}", formData.name);
    res = res.replace("${{githubUsername}}", formData.githubUsername);
    res = res.replace("${{websiteUrl}}", formData.websiteUrl);
    res = res.replace("${{headline}}", formData.headline);
    res = res.replace("${{description}}", formData.description);
    return res;
}