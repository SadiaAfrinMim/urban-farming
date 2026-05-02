// @ts-ignore
import OpenAI from 'openai';
import config from '../../config';
// Check if OpenRouter API key is available
const openRouterApiKey = config.openRouterApiKey;
export const hasOpenRouterKey = openRouterApiKey &&
    openRouterApiKey !== 'your-openrouter-api-key-here' &&
    openRouterApiKey !== '' &&
    openRouterApiKey !== 'undefined' &&
    openRouterApiKey !== 'null';
console.log('🔧 OpenRouter API Key Status:', hasOpenRouterKey ? '✅ Available' : '❌ Missing');
console.log('🔧 OpenRouter API Key Value:', openRouterApiKey ? 'Set' : 'Not set');
// OpenRouter client for AI chatbot
export const openRouter = hasOpenRouterKey ? new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: openRouterApiKey,
    defaultHeaders: {
        'HTTP-Referer': 'https://urban-farming.vercel.app',
        'X-Title': 'Urban Farming Chatbot',
    },
}) : null;
// Export the key status for health checks
// Legacy OpenAI client (if needed)
export const openai = new OpenAI({
    apiKey: config.openaiApiKey || config.openRouterApiKey,
});
//# sourceMappingURL=open-router.js.map