// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
import Anthropic from '@anthropic-ai/sdk';

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, // This is the default and can be omitted
});