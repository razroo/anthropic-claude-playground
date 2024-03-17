# Anthropic Claude Playground

## How To Run Any File As A Standalone

```
npm install;
npm install -g ts-node;
ts-node <path-to-file>
```

## Retrieve Anthropic Playground Api Key 

Go to https://docs.anthropic.com/claude/docs/getting-access-to-claude

1. To retrieve your Anthropic api key. 
2. Copy the .env.example file as a .env 
file. 
3. Replace `ANTHROPIC_API_KEY` with you
Anthropic api key 
4. Run e.g `ts-node src/claude/opus/create-message-opus.ts` to run opus api

That's it!

## Repo Generate Using Razroo
This repo was built and created using Razroo. Razroo is Human Collective Intelligence. Meant to make it simple 
for the entire world to share and integrate real world knowledge as scale. 

To see documentation for any Razroo generated code run git log on the file itself. 

For instance, to see how the `package.json` was created run `git log package.json`
