import OpenAI from 'openai';
import fs from 'fs';

const openai = new OpenAI();

export async function createAndUploadVectorStore() {
  try {
    // Create a vector store
    const vectorStore = await openai.beta.vectorStores.create({
      name: "AndrewPersonalInfoVectorStore",  // Name of your vector store
    });

    const fileStreams = [
      'docs/school_info.pdf',
      'docs/project_summaries.pdf',
      'docs/courses.txt'
    ].map(path => fs.createReadStream(path));

    await openai.beta.vectorStores.fileBatches.uploadAndPoll(vectorStore.id, fileStreams);

    return vectorStore;
  } catch (error) {
    console.error('Error creating vector store:', error);
  }
}
