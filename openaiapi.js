import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function categorizeImage(imageData) {
    try {
        console.log('Sending image to OpenAI:', imageData); // Debug log

        const response = await openai.chat.completions.create({
            model: 'gpt-4o-2024-08-06',
            messages: [
                { role: 'system', content: 'Describe the clothing in this image.' },
                { role: 'user', content: imageData }
            ]
        });

        console.log('OpenAI response:', response); // Debug log
        return response.choices[0]?.message?.content || 'No tags found';
    } catch (error) {
        console.error('OpenAI API Error:', error);
        return 'Error processing image';
    }
}