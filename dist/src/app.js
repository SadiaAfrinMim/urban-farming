"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_js_1 = __importDefault(require("./config/index.js"));
// @ts-ignore
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// @ts-ignore
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const globalErrorHandler_js_1 = __importDefault(require("./app/middlewares/globalErrorHandler.js"));
const notFound_js_1 = __importDefault(require("./app/middlewares/notFound.js"));
const index_js_2 = __importDefault(require("./app/routes/index.js"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
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
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
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
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use("/api/v1", index_js_2.default);
app.get('/', (req, res) => {
    res.send({
        message: "Server is running..",
        environment: index_js_1.default.node_env,
        uptime: process.uptime().toFixed(2) + " sec",
        timeStamp: new Date().toISOString()
    });
});
app.use(globalErrorHandler_js_1.default);
app.use(notFound_js_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map