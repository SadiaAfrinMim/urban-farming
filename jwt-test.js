// JWT Test Script
const jwt = require('jsonwebtoken');

const secret = 'asdfasdfasdf';
const payload = { id: 'test-id', role: 'Vendor', email: 'test@example.com' };

try {
  // Generate token
  const token = jwt.sign(payload, secret, { expiresIn: '7d' });
  console.log('Generated Token:', token);
  console.log('Token Length:', token.length);

  // Verify token
  const decoded = jwt.verify(token, secret);
  console.log('Decoded Token:', decoded);

  console.log('✅ JWT test passed!');
} catch (error) {
  console.error('❌ JWT test failed:', error.message);
}