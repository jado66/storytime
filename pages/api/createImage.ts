import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const response = await openai.createImage({
        prompt: req.body.prompt,
        n: 1,
        size: "256x256",
        response_format:"b64_json"
  });

  // console.log(JSON.stringify(completion,null,2))
  res.status(200).json({ result: response.data });
}