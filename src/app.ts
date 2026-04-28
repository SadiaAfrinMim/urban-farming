import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

// @ts-ignore
import swaggerUi from 'swagger-ui-express';
// @ts-ignore
import swaggerJsdoc from 'swagger-jsdoc';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import config from './config';
import router from './app/routes';
import cookieParser from 'cookie-parser'



const app: Application = express();


app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://urban-farming-sable.vercel.app',
        'https://urban-farming-backend-pink.vercel.app',
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
        url: 'http://localhost:5000/api/v1',
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
        environment: config.node_env,
        uptime: process.uptime().toFixed(2) + " sec",
        timeStamp: new Date().toISOString()
    })
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;