import { prisma } from '../../shared/prisma.js';
import { openRouter } from '../../helpers/open-router.js';
// Send Message
const sendMessage = async (payload) => {
    try {
        let userId = null;
        if (payload.userId !== 'guest') {
            userId = typeof payload.userId === 'string' ? parseInt(payload.userId) : payload.userId;
            if (isNaN(userId)) {
                throw new Error('Invalid userId: must be a number');
            }
        }
        const chat = await prisma.chat.create({
            data: {
                userId,
                message: payload.message,
                isBot: payload.isBot || false,
            },
        });
        return chat;
    }
    catch (error) {
        // If chat table doesn't exist yet, return a mock response
        if (error?.code === 'P2028' || error?.message?.includes('create') || error?.message?.includes('chat')) {
            console.warn('Chat table not found, returning mock message');
            return {
                id: Date.now(),
                userId,
                message: payload.message,
                isBot: payload.isBot || false,
                timestamp: new Date(),
            };
        }
        throw error;
    }
};
// Get Messages for a user
const getMessages = async (userId) => {
    try {
        let whereCondition;
        if (userId === 'guest') {
            // For guest users, find messages where userId is null
            whereCondition = { userId: null };
        }
        else {
            const parsedUserId = typeof userId === 'string' ? parseInt(userId) : userId;
            if (isNaN(parsedUserId)) {
                throw new Error('Invalid userId: must be a number');
            }
            whereCondition = { userId: parsedUserId };
        }
        const messages = await prisma.chat.findMany({
            where: whereCondition,
            orderBy: { timestamp: 'asc' },
        });
        return messages;
    }
    catch (error) {
        // If chat table doesn't exist yet, return empty array
        if (error?.code === 'P2028' || error?.message?.includes('findMany') || error?.message?.includes('chat')) {
            console.warn('Chat table not found, returning empty messages array');
            return [];
        }
        throw error;
    }
};
// Generate Bot Response using OpenRouter (AI-powered)
const generateBotResponse = async (userMessage) => {
    const isProduction = process.env.NODE_ENV === 'production';
    const useAI = !!openRouter;
    console.log('🤖 Generating response for:', userMessage.substring(0, 50) + '...');
    console.log('🔧 Environment:', isProduction ? 'Production' : 'Development');
    console.log('🔧 AI Mode:', useAI ? 'Enabled' : 'Disabled (Fallback)');
    if (!useAI) {
        console.log('🔄 Using fallback response (OpenRouter not available)');
        return getFallbackResponse(userMessage);
    }
    try {
        console.log('🔧 Attempting OpenRouter API call...');
        const completion = await openRouter.chat.completions.create({
            model: "anthropic/claude-3-haiku",
            messages: [
                {
                    role: "system",
                    content: `আপনি একটি সহায়ক AI চ্যাটবট যিনি Urban Farming প্ল্যাটফর্মের জন্য কাজ করেন। এই প্ল্যাটফর্মটি কৃষক এবং ক্রেতাদের জন্য তৈরি করা হয়েছে।

প্ল্যাটফর্মের ফিচারগুলো:
- মার্কেটপ্লেস: তাজা কৃষি পণ্য কেনাকাটা (/marketplace)
- ভেন্ডর সিস্টেম: কৃষকরা তাদের পণ্য বিক্রি করতে পারেন (/register)
- রেন্টাল স্পেস: ফার্মিং জমি ভাড়া (/rentals)
- কমিউনিটি: কৃষকদের মধ্যে আলোচনা (/community)
- অর্ডার ম্যানেজমেন্ট: অর্ডার ট্র্যাকিং (/orders)
- প্ল্যান্ট ট্র্যাকিং: গাছের বৃদ্ধি মনিটরিং
- সার্টিফিকেশন: জৈব এবং টেকসই কৃষি (/sustainability)
- প্রোফাইল ম্যানেজমেন্ট (/profile)

আপনার উত্তর:
- বাংলায় দিন (কখনো ইংরেজিতে না)
- সহায়ক এবং বিনয়ী হোন
- প্রয়োজন হলে পেজ লিংক সাজেস্ট করুন
- সংক্ষিপ্ত এবং স্পষ্ট উত্তর দিন
- যদি কোনো প্রশ্ন বুঝতে না পারেন তাহলে সাহায্য চান`
                },
                {
                    role: "user",
                    content: userMessage
                }
            ],
            max_tokens: 300,
            temperature: 0.7
        });
        const response = completion.choices[0]?.message?.content?.trim();
        console.log('✅ AI Response generated successfully');
        if (!response) {
            console.warn('⚠️ Empty AI response, using fallback');
            return getFallbackResponse(userMessage);
        }
        return response;
    }
    catch (error) {
        console.error('❌ OpenRouter API Error:', error);
        // Log specific error details
        if (error?.response) {
            console.error('API Response Error:', error.response.status, error.response.data);
        }
        else if (error?.message) {
            console.error('API Error Message:', error.message);
        }
        else {
            console.error('Unknown error type:', typeof error);
        }
        // Always fallback to basic responses
        console.log('🔄 Using fallback response');
        return getFallbackResponse(userMessage);
    }
};
// Fallback function for when AI fails
const getFallbackResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('হ্যালো') || lowerMessage.includes('hello')) {
        return 'হ্যালো! Urban Farming প্ল্যাটফর্মে আপনাকে স্বাগতম। কিভাবে সাহায্য করতে পারি?';
    }
    if (lowerMessage.includes('পণ্য') || lowerMessage.includes('product')) {
        return 'আমাদের মার্কেটপ্লেসে তাজা কৃষি পণ্য পাবেন। /marketplace পেজে দেখুন।';
    }
    if (lowerMessage.includes('অর্ডার') || lowerMessage.includes('order')) {
        return 'আপনার অর্ডারগুলো /orders পেজে দেখুন।';
    }
    if (lowerMessage.includes('ভেন্ডর') || lowerMessage.includes('vendor')) {
        return 'ভেন্ডর হতে চান? /register পেজে রেজিস্টার করুন।';
    }
    if (lowerMessage.includes('কমিউনিটি') || lowerMessage.includes('community')) {
        return 'কমিউনিটিতে যোগ দিতে /community পেজে যান।';
    }
    return 'দুঃখিত, আপনার প্রশ্ন বুঝতে পারলাম না। অনুগ্রহ করে আরও বিস্তারিত বলুন।';
};
// Handle Chat Message (with bot response)
const handleChatMessage = async (payload) => {
    try {
        // Save user message
        await sendMessage({ userId: payload.userId, message: payload.message, isBot: false });
        // Generate bot response
        const botResponse = await generateBotResponse(payload.message);
        // Save bot response
        const botMessage = await sendMessage({
            userId: payload.userId,
            message: botResponse,
            isBot: true
        });
        return botMessage;
    }
    catch (error) {
        // If chat table doesn't exist, just return bot response without saving
        if (error?.code === 'P2028' || error?.message?.includes('chat')) {
            console.warn('Chat table not found, returning bot response without saving');
            const botResponse = await generateBotResponse(payload.message);
            return {
                id: Date.now(),
                userId: payload.userId === 'guest' ? null : parseInt(payload.userId),
                message: botResponse,
                isBot: true,
                timestamp: new Date(),
            };
        }
        throw error;
    }
};
export const ChatService = {
    sendMessage,
    getMessages,
    generateBotResponse,
    handleChatMessage,
};
//# sourceMappingURL=chat.service.js.map