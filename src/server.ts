import app from './app.js';
import config from './config/index.js';

// Check if we're in a serverless environment (Vercel)
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV;
const isRailway = process.env.RAILWAY_ENVIRONMENT;

// For local development or Railway (not serverless)
if (!isVercel) {
    import('./local-server.js');
} else {
    // For Vercel serverless functions, just export the app
    console.log('🚀 Running in serverless mode (Vercel)');
}

// Export the app for Vercel
export default app;