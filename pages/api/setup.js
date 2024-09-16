import {createAssistant} from "@lib/assistant"
import {createAndUploadVectorStore} from "@lib/VectorStore"
import OpenAI from 'openai';
import fs from 'fs';

export default async function setUp(req, res){

    if (req.method == "POST"){

        try {
            const assistant = await createAssitant();

            if (assistant){
                const envPath = "./.env.local";
                const data = `ASSISTANT_ID=${assistant.id}\n`;


                fs.appendFile(envPath, data, (err) => {
                    if (err) {
                        console.error('Error updating assistant_id : ', err);
                    }else {
                        console.log('Successfully updated assistant_id');
                    }
                })



                const vector = await createandUploadVS();
                const vec = `VECTOR_ID=${vector.id}\n`;

                fs.appendFile(envPath,vec, (err) => {
                    if (err) {
                        console.error('Error updating vector_id : ', err);
                    }else {
                        console.log('Successfully updated vector_id');
                    }

                } )

                //const assitant_Id = process.env.ASSISTED_ID;
                //const vector_Id = process.env.VECTOR_ID;


                await openai.beta.assistants.update(assistant.id, {
                    tool_resources: { file_search: { vector_store_ids: [vector.id] } },
                  });

            }

        } catch (error){
            console.error("Error with assitant creation: ", error);

        }
        
        
    }  else {
        console.log("must use POST method");
    }

}