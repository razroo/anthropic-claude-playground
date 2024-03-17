import { anthropic } from "../claude";

async function generateOpusMessageUsingAi(userPrompt) {
    const message = await anthropic.messages.create({
      max_tokens: 1024,
      messages: [
        { role: 'user', content: userPrompt }
      ],
      model: 'claude-3-opus-20240229',
    });

    return message.content;
  
}

const userPrompt = 'please explain to me how the universe was created';
generateOpusMessageUsingAi(userPrompt).then(data => {
  console.log('data');
  console.log(data);
})