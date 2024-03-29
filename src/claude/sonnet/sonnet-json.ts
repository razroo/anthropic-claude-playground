import { anthropic } from "../claude";

async function generateSonnetMessageUsingAi(userPrompt) {
    const message = await anthropic.messages.create({
      max_tokens: 4096,
      messages: [
        { role: 'user', content: userPrompt }
      ],

      model: 'claude-3-sonnet-20240229',
    });

    return message.content;
  
}

const userPrompt = 'please explain to me how the universe was created. Output as json';
generateSonnetMessageUsingAi(userPrompt).then(data => {
  console.log('data');
  console.log(data);
})