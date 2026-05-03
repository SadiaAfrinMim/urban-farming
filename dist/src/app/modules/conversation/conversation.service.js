import { prisma } from '../../shared/prisma.js';
import { NotificationService } from '../notification/notification.service.js';
import { NotificationType } from '@prisma/client';
// Create or get existing conversation between two users
const getOrCreateConversation = async (userId1, userId2) => {
    // Ensure consistent ordering (smaller ID first)
    const [participant1Id, participant2Id] = userId1 < userId2 ? [userId1, userId2] : [userId2, userId1];
    let conversation = await prisma.conversation.findUnique({
        where: {
            participant1Id_participant2Id: {
                participant1Id,
                participant2Id,
            },
        },
        include: {
            participant1: {
                select: { id: true, name: true, profileImage: true },
            },
            participant2: {
                select: { id: true, name: true, profileImage: true },
            },
        },
    });
    if (!conversation) {
        conversation = await prisma.conversation.create({
            data: {
                participant1Id,
                participant2Id,
            },
            include: {
                participant1: {
                    select: { id: true, name: true, profileImage: true },
                },
                participant2: {
                    select: { id: true, name: true, profileImage: true },
                },
            },
        });
    }
    return conversation;
};
// Get all conversations for a user
const getUserConversations = async (userId) => {
    const conversations = await prisma.conversation.findMany({
        where: {
            OR: [
                { participant1Id: userId },
                { participant2Id: userId },
            ],
        },
        include: {
            participant1: {
                select: { id: true, name: true, profileImage: true },
            },
            participant2: {
                select: { id: true, name: true, profileImage: true },
            },
            messages: {
                take: 1,
                orderBy: { createdAt: 'desc' },
                include: {
                    sender: {
                        select: { id: true, name: true },
                    },
                },
            },
        },
        orderBy: { updatedAt: 'desc' },
    });
    // Add unread message count for each conversation
    const conversationsWithUnreadCount = await Promise.all(conversations.map(async (conversation) => {
        const unreadCount = await prisma.message.count({
            where: {
                conversationId: conversation.id,
                senderId: { not: userId },
                isRead: false,
            },
        });
        return {
            ...conversation,
            unreadCount,
        };
    }));
    return conversationsWithUnreadCount;
};
// Send message in a conversation
const sendMessage = async (conversationId, senderId, content) => {
    // Verify sender is part of the conversation
    const conversation = await prisma.conversation.findUnique({
        where: { id: conversationId },
    });
    if (!conversation) {
        throw new Error('Conversation not found');
    }
    if (conversation.participant1Id !== senderId && conversation.participant2Id !== senderId) {
        throw new Error('Unauthorized: You are not part of this conversation');
    }
    // Create message
    const message = await prisma.message.create({
        data: {
            conversationId,
            senderId,
            content,
        },
        include: {
            sender: {
                select: { id: true, name: true, profileImage: true },
            },
        },
    });
    // Update conversation timestamp
    await prisma.conversation.update({
        where: { id: conversationId },
        data: { updatedAt: new Date() },
    });
    // Get receiver ID
    const receiverId = conversation.participant1Id === senderId
        ? conversation.participant2Id
        : conversation.participant1Id;
    // Create notification for receiver
    await NotificationService.createNotification(receiverId, NotificationType.MESSAGE, 'New Message', `You have a new message from ${message.sender.name}`, {
        conversationId,
        messageId: message.id,
        senderId: message.sender.id,
        senderName: message.sender.name,
    });
    // Emit real-time events via Socket.IO
    const io = global.io;
    if (io) {
        // Emit to conversation room for real-time messaging
        io.to(`conversation_${conversationId}`).emit('new_message', {
            conversationId,
            message,
            sender: message.sender,
        });
        // Emit notification to receiver's personal room (using the same pattern as existing notifications)
        io.to(`user_${receiverId}`).emit(`notification-${receiverId}`, {
            id: Date.now(), // Temporary ID for real-time notifications
            userId: receiverId,
            type: 'MESSAGE',
            title: 'New Message',
            message: `New message from ${message.sender.name}`,
            data: {
                conversationId,
                messageId: message.id,
                senderId: message.sender.id,
                senderName: message.sender.name,
            },
            isRead: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });
    }
    return message;
};
// Get messages for a conversation
const getConversationMessages = async (conversationId, userId) => {
    // Verify user is part of the conversation
    const conversation = await prisma.conversation.findUnique({
        where: { id: conversationId },
    });
    if (!conversation) {
        throw new Error('Conversation not found');
    }
    if (conversation.participant1Id !== userId && conversation.participant2Id !== userId) {
        throw new Error('Unauthorized: You are not part of this conversation');
    }
    const messages = await prisma.message.findMany({
        where: { conversationId },
        include: {
            sender: {
                select: { id: true, name: true, profileImage: true },
            },
        },
        orderBy: { createdAt: 'asc' },
    });
    // Mark messages as read (only messages sent by the other participant)
    const otherParticipantId = conversation.participant1Id === userId
        ? conversation.participant2Id
        : conversation.participant1Id;
    await prisma.message.updateMany({
        where: {
            conversationId,
            senderId: otherParticipantId,
            isRead: false,
        },
        data: { isRead: true },
    });
    return messages;
};
// Mark messages as read
const markMessagesAsRead = async (conversationId, userId) => {
    const conversation = await prisma.conversation.findUnique({
        where: { id: conversationId },
    });
    if (!conversation) {
        throw new Error('Conversation not found');
    }
    if (conversation.participant1Id !== userId && conversation.participant2Id !== userId) {
        throw new Error('Unauthorized: You are not part of this conversation');
    }
    const otherParticipantId = conversation.participant1Id === userId
        ? conversation.participant2Id
        : conversation.participant1Id;
    await prisma.message.updateMany({
        where: {
            conversationId,
            senderId: otherParticipantId,
            isRead: false,
        },
        data: { isRead: true },
    });
    return { success: true };
};
export const ConversationService = {
    getOrCreateConversation,
    getUserConversations,
    sendMessage,
    getConversationMessages,
    markMessagesAsRead,
};
//# sourceMappingURL=conversation.service.js.map