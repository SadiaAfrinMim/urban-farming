import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from './config/index.ts';
// @ts-ignore
import swaggerUi from 'swagger-ui-express';
// @ts-ignore
import swaggerJsdoc from 'swagger-jsdoc';
import globalErrorHandler from './app/middlewares/globalErrorHandler.ts';
import notFound from './app/middlewares/notFound.ts';
import router from './app/routes/index.ts';
import cookieParser from 'cookie-parser';
// Test OpenRouter configuration on startup
try {
    const { openRouter } = require('./app/helpers/open-router');
    console.log('🚀 App startup - OpenRouter status check');
    if (openRouter) {
        console.log('✅ OpenRouter client initialized successfully');
    }
    else {
        console.log('⚠️ OpenRouter client is null - chatbot will use fallback responses');
    }
}
catch (error) {
    console.log('❌ Error checking OpenRouter configuration:', error?.message);
}
const app = express();
app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://urban-farming.vercel.app',
        'https://urban-farming-sable.vercel.app',
        // Add any additional frontend deployment URLs here
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
//parser
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// API logging
app.use(morgan('combined'));
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Urban Farming Platform API',
            version: '1.0.0',
            description: 'API for Interactive Urban Farming Platform',
        },
        servers: [
            {
                url: 'https://urban-farming-backend-pink.vercel.app/api/v1',
                description: 'Local development server'
            },
            {
                url: 'https://urban-farming-backend-lntnpv71y-sadia660s-projects.vercel.app/api/v1',
                description: 'Production server'
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },
    apis: ['./src/app/modules/**/*.routes.ts'], // Path to the API docs
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1", router);
app.get('/', (req, res) => {
    res.send({
        message: "Server is running..",
        environment: config.node_env,
        uptime: process.uptime().toFixed(2) + " sec",
        timeStamp: new Date().toISOString()
    });
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
//# sourceMappingURL=app.js.map