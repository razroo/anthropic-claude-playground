import { anthropic } from "../claude";
import { encodeBase64 } from "../../utils/encode-base-64";

async function describeImageUsingAi(userPrompt: string, base64Image: string) {
    const message = await anthropic.messages.create({
      max_tokens: 1024,
      model: 'claude-3-sonnet-20240229',
      messages: [
        { role: 'user', content: [
            { 
                type: "image", 
                source: {
                  type: 'base64',  
                  data: base64Image,
                  media_type: 'image/png'
                }
            }, 
            {
              type: 'text',
              text: userPrompt
            }
        ] },
        
      ],
      
    });

    return message.content;
}

const base64Image = encodeBase64('src/images/cat-photo.png');
const userPrompt = `Can you describe what the purpose of this web application is? 

Use the main area only to determine this.
`;
describeImageUsingAi(userPrompt, base64Image).then(data => {
  console.log('data');
  console.log(data);
})