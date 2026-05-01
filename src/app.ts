import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

// @ts-ignore
import swaggerUi from 'swagger-ui-express';
// @ts-ignore
import swaggerJsdoc from 'swagger-jsdoc';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

import router from './app/routes';
import cookieParser from 'cookie-parser'

// Test OpenRouter configuration on startup
try {
  const { openRouter } = require('./app/helpers/open-router');
  console.log('🚀 App startup - OpenRouter status check');
  if (openRouter) {
    console.log('✅ OpenRouter client initialized successfully');
  } else {
    console.log('⚠️ OpenRouter client is null - chatbot will use fallback responses');
  }
} catch (error) {
  console.log('❌ Error checking OpenRouter configuration:', error?.message);
}

const app: Application = express();


// Simplified CORS configuration for Vercel
const corsOptions = {
    origin: true, // Allow all origins for now to debug
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
    exposedHeaders: ['Set-Cookie'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Additional CORS headers middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    // Set CORS headers dynamically
    const origin = req.headers.origin;
    if (origin) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, X-Access-Token');

    // Handle preflight OPTIONS requests
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
        return;
    }

    next();
});

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

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: "Server is running..",
        environment: process.env.NODE_ENV,
        uptime: process.uptime().toFixed(2) + " sec",
        timeStamp: new Date().toISOString()
    })
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;