import app from './app';
import config from './config';

// Check if we're in a serverless environment (Vercel)
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV;

// For local development (not serverless)
if (!isVercel) {
    import('./local-server');
} else {
    // For Vercel serverless functions, just export the app
    console.log('🚀 Running in serverless mode (Vercel)');
}

// Export the app for Vercel
export default app;