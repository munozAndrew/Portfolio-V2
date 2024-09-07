import OpenAI from 'openai';
import fs from 'fs';

const openai = new OpenAI( { apiKey:process.env.OPENAI_API,});

export async function createAndUploadVectorStore() {
  try {
    // Create a vector store
    const vectorStore = await openai.beta.vectorStores.create({
      name: "AndrewPersonalInfoVectorStore",  // Name of your vector store
    });
    console.log("SOMETING");
    const fileStreams = [
      '../Robinhood_resume.pdf'
    ].map(path => fs.createReadStream(path));

    await openai.beta.vectorStores.fileBatches.uploadAndPoll(vectorStore.id, fileStreams);

    return vectorStore;
  } catch (error) {
    console.error('Error creating vector store:', error);
  }
}
