import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import config from './config/index.js';
// @ts-ignore
import swaggerUi from 'swagger-ui-express';
// @ts-ignore
import swaggerJsdoc from 'swagger-jsdoc';
import globalErrorHandler from './app/middlewares/globalErrorHandler.js';
import notFound from './app/middlewares/notFound.js';
import { openRouter } from './app/helpers/open-router.js';
import router from './app/routes/index.js';
try {
    console.log('App startup - OpenRouter status check');
    if (openRouter) {
        console.log('OpenRouter client initialized successfully');
    }
    else {
        console.log('OpenRouter client is null - chatbot will use fallback responses');
    }
}
catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.log('OpenRouter configuration check failed:', message);
}
const app = express();
app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://urban-farming.vercel.app',
        'https://urban-farming-sable.vercel.app',
        'https://urban-farming-rt02.onrender.com',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
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
                url: 'https://urban-farming-rt02.onrender.com/api/v1',
                // url: 'https://urban-farming-backend-pink.vercel.app/api/v1',
                description: 'Local development server',
            },
            {
                url: 'https://urban-farming-backend-lntnpv71y-sadia660s-projects.vercel.app/api/v1',
                description: 'Production server',
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
    apis: ['./src/app/modules/**/*.routes.ts'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/v1', router);
app.get('/', (_req, res) => {
    res.send({
        message: 'Server is running..',
        environment: config.node_env,
        uptime: `${process.uptime().toFixed(2)} sec`,
        timeStamp: new Date().toISOString(),
    });
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
//# sourceMappingURL=app.js.map