
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the "Deloitte Insight Assistant". 
You represent Deloitte, a world-class professional services firm. 
Your goal is to help users understand Deloitte's services (Audit, Consulting, Tax, Advisory) and provide insights based on global trends.
Always be professional, insightful, and strategic.
If asked about Deloitte's mission, it is "To make an impact that matters".
Keep responses concise (max 3 sentences).`;

export async function getInsightResponse(prompt: string) {
  try {
    // Initialize inside the function to ensure the latest API key is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    // Graceful error handling for production
    return "I am currently processing high volumes of strategic data. Please try again in a moment or contact our global support team.";
  }
}
