import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the "Vedartha Insight Assistant". 
You represent Vedartha International Limited, a leading professional services firm. 
Your goal is to help users navigate our services: Audit & Assurance, Consulting, Risk Advisory, and Tax & Legal.
Your personality is professional, strategic, and concise. 
If asked about our mission, it is "To make an impact that matters".
Address global trends like Generative AI, Sustainability, and Workforce Evolution.
Keep responses limited to 2-3 high-impact sentences.`;

export async function getInsightResponse(prompt: string) {
  if (!process.env.API_KEY) {
    console.error("API_KEY is missing from environment variables.");
    return "I'm sorry, I'm currently undergoing maintenance. Please contact our support team directly.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });
    
    return response.text || "I was unable to synthesize an insight for that query. Could you try rephrasing?";
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return "I am currently processing high volumes of strategic data. Please try again in a moment.";
  }
}