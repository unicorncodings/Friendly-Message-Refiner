import { GoogleGenAI } from "@google/genai";
import { Tone } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const refineMessage = async (message: string, tone: Tone): Promise<string> => {
  const prompt = `
    You are an expert communication assistant. Your task is to refine a given message to be sent to a customer.
    Follow these rules strictly:
    1. The user might provide input in English, Sinhala (සිංහල), or "Singlish" (Sinhala typed with English letters).
    2. Regardless of the input language, your output MUST be in polished, grammatically perfect, and natural-sounding English.
    3. Adopt a ${tone} tone for the final message. For 'Apologetic', start with a sincere apology.
    4. Do NOT add any extra commentary, explanations, or labels like "Here is the refined message:". Only output the final refined message itself.
    5. The final output must sound completely human and not like an AI or a literal translation.
    6. Ensure the core meaning of the original message is preserved.

    Here is the message to refine:
    "${message}"
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get a response from the AI service.");
  }
};