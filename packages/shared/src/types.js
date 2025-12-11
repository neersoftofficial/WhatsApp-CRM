// Shared constants & shape descriptions (lightweight, JS-only)

/**
 * Message directions used across the system.
 * - inbound  -> from contact to us
 * - outbound -> from us (agent/bot) to contact
 */
const MESSAGE_DIRECTIONS = {
  INBOUND: 'inbound',
  OUTBOUND: 'outbound',
}

/**
 * Conversation status values.
 */
const CONVERSATION_STATUS = {
  OPEN: 'open',
  PENDING: 'pending',
  CLOSED: 'closed',
}

/**
 * Simple factory for a message object.
 */
function createMessage(payload) {
  return {
    id: payload.id || Date.now().toString(),
    conversationId: payload.conversationId || null,
    from: payload.from || 'agent',
    direction: payload.direction || MESSAGE_DIRECTIONS.OUTBOUND,
    body: payload.body || '',
    createdAt: payload.createdAt || new Date().toISOString(),
    meta: payload.meta || {},
  }
}

module.exports = {
  MESSAGE_DIRECTIONS,
  CONVERSATION_STATUS,
  createMessage,
}
