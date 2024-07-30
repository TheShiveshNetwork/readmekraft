"use server";

import { conductFormData, formData, guidelinesFormData, projectReadmeFormData } from "@/types";
import { getFileData } from "./getFileData";

export async function FormatReadmeThemeData(formData: formData, markdownPath: string, selectedTheme: string) {
    const fileData = await getFileData(markdownPath, selectedTheme);
    let res: string = fileData;
    res = res.replaceAll("${{name}}", formData.name);
    res = res.replaceAll("${{githubUsername}}", formData.githubUsername);
    res = res.replaceAll("${{websiteUrl}}", formData.websiteUrl);
    res = res.replaceAll("${{headline}}", formData.headline);
    res = res.replaceAll("${{description}}", formData.description);
    res = res.replaceAll("${{holopinUrl}}", formData.holopinUrl);
    res = res.replaceAll("${{otherLink}}", formData.otherLink);
    let languageSection: string = "";
    for (let i=0; i<formData.languages.length; i++) {
        const languageContent = `<img src="https://github.com/devicons/devicon/blob/master/icons/${formData.languages[i]}/${formData.languages[i]}-original.svg" alt="${formData.languages[i]}" width="40" height="40"/>&nbsp;`
        languageSection += languageContent;
    }
    console.log(languageSection)
    res = res.replaceAll("${{languages}}", languageSection);
    return res;
}

export async function FormatGuidelinesData(formData:guidelinesFormData, markdownPath: string, selectedTheme: string) {
    const fileData = await getFileData(markdownPath, selectedTheme);
    let res: string = fileData;
    res = res.replaceAll("${{name}}", formData.name);
    res = res.replaceAll("${{description}}", formData.description);
    return res;
}

export async function FormatProjectReadmeData(formData:projectReadmeFormData, markdownPath: string, selectedTheme: string) {
    const fileData = await getFileData(markdownPath, selectedTheme);
    let res: string = fileData;
    res = res.replaceAll("${{name}}", formData.name);
    res = res.replaceAll("${{headline}}", formData.headline);
    res = res.replaceAll("${{description}}", formData.description);
    res = res.replaceAll("${{githubUsername}}", formData.githubUsername);
    res = res.replaceAll("${{contactLink}}", formData.contactLink);
    return res;
}

export async function FormatConductData(formData:conductFormData, markdownPath: string, selectedTheme: string) {
    const fileData = await getFileData(markdownPath, selectedTheme);
    let res: string = fileData;
    res = res.replaceAll("${{name}}", formData.name);
    res = res.replaceAll("${{description}}", formData.description);
    return res;
}