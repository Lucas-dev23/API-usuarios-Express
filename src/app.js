import express from 'express';

const app = express();

// middleware para JSON no body
app.use(express.json());

export default app;