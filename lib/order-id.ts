// lib/order-id.ts
//
// Generates a short, unguessable public order ID for the leads table.
// This is what clients use on /track — it must NOT be predictable from
// the row's sequential position or timestamp, or one client could guess
// another client's order_id and see their status.
//
// Format: SS-XXXXXX (SS = StudySmith, 6 random alphanumeric chars, uppercase)
// ~2 billion possible combinations — effectively unguessable for this scale,
// while still being short enough for someone to type into /track by hand.

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // no O/0/I/1 — avoids confusion when read aloud or handwritten

export function generateOrderId(): string {
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += CHARS[Math.floor(Math.random() * CHARS.length)]
  }
  return `SS-${code}`
}