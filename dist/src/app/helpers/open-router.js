"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openai = exports.openRouter = exports.hasOpenRouterKey = void 0;
// @ts-ignore
const openai_1 = __importDefault(require("openai"));
const config_1 = __importDefault(require("../../config"));
// Check if OpenRouter API key is available
const openRouterApiKey = config_1.default.openRouterApiKey;
exports.hasOpenRouterKey = openRouterApiKey &&
    openRouterApiKey !== 'your-openrouter-api-key-here' &&
    openRouterApiKey !== '' &&
    openRouterApiKey !== 'undefined' &&
    openRouterApiKey !== 'null';
console.log('🔧 OpenRouter API Key Status:', exports.hasOpenRouterKey ? '✅ Available' : '❌ Missing');
console.log('🔧 OpenRouter API Key Value:', openRouterApiKey ? 'Set' : 'Not set');
// OpenRouter client for AI chatbot
exports.openRouter = exports.hasOpenRouterKey ? new openai_1.default({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: openRouterApiKey,
    defaultHeaders: {
        'HTTP-Referer': 'https://urban-farming.vercel.app',
        'X-Title': 'Urban Farming Chatbot',
    },
}) : null;
// Export the key status for health checks
// Legacy OpenAI client (if needed)
exports.openai = new openai_1.default({
    apiKey: config_1.default.openaiApiKey || config_1.default.openRouterApiKey,
});
//# sourceMappingURL=open-router.js.map