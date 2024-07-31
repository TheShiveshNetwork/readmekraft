"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { Dispatch, SetStateAction } from "react";

export async function GenerateContentWithAI(systemPrompt: string, initialData: string) {
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API || "");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    let prompt = systemPrompt;
    if (initialData && initialData != "") {
        prompt = systemPrompt + " Enhance the given text with respect to the description provided." + initialData;
    }
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
}