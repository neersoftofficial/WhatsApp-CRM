/**
 * Simple WhatsApp driver stub.
 * Replace with a real driver implementation later (Baileys/Official API).
 *
 * This file exports an EventEmitter-like object with basic events:
 *  - 'qr'    -> emits QR payload
 *  - 'ready' -> emits when session is ready
 *
 * It also exposes `emitQr()` helper to simulate QR generation for dev.
 */

const EventEmitter = require('eventemitter3')
const emitter = new EventEmitter()

// Public API: on, emit, emitQr
emitter.emitQr = function(qrPayload) {
  // in real driver you'd emit raw QR or base64 png
  this.emit('qr', qrPayload)
}

// Example: simulate ready after 2s when emitReady called
emitter.emitReady = function(info = { connected: true }) {
  this.emit('ready', info)
}

module.exports = emitter
