import OpenAI from "openai";
const openai = new OpenAI( { apiKey:process.env.OPENAI_API,});


export async function createAssistant() {
  try {
    const assistant = await openai.beta.assistants.create({
      name: "Andrew's Chatbot",
      instructions: "You are an expert on information about Andrew. Use your knowledge base to answer questions related to Andrew's academic or professional experience.",
      model: "gpt-3.5-turbo",
      tools: [{ type: "file_search" }],
      });
    

    return assistant;
    
  } catch (error) {
    console.error("Error creating assistant:", error);
  }
}
