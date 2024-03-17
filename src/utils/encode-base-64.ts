import fs from 'fs';

// Function to encode the image
export function encodeBase64(filePath: string): string {
   // Ensure the file path is valid and the file exists.
  if (!fs.existsSync(filePath)) {
    throw new Error('File does not exist.');
  }
  const imageFile = fs.readFileSync(filePath);
  return Buffer.from(imageFile).toString('base64');
}