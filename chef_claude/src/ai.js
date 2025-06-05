import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(import.meta.env.VITE_AI_API_KEY);
const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function getRecipeFromAI(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  const prompt = `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`;

  try {
    const result = await model.generateContent({
      contents: [{ parts: [{ text: prompt }] }]
    });

    const response = await result.response;
    return response.text();
  } catch (err) {
    console.error("Gemini API error:", err);
    return "Error generating recipe.";
  }
}
