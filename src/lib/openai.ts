import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function generateImagePrompt (name: string) {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: "system",
          content: "You are an creative and helpful AI assistance capable of generating interesting thumbnail descriptions for my notes. Your output will be fed into the DALLE API to generate a thumbnail. The description should be minimalistic and flat styled",
        },
        {
          role: "user",
          content: `Please generate a thumbnail description for my notebook title ${name} and your response must be short in less than 1000 characters`,
        },
      ],
      max_tokens: 200,
    });
    
    const data = await response.json();
    console.log(data.choices);
    const image_desc = data.choices[0].message.content;
    
    return image_desc as string;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function generateImage (img_desc: string) {
  try {
    const response = await openai.createImage({
      prompt: img_desc,
      n: 1,
      size: '256x256',
    });
    const data =await response.json();
    console.log({ data });
    const img_url = data.data[0].url;
    return img_url as string;
  } catch (err) {
    console.log(err);
    throw err;
  }
}