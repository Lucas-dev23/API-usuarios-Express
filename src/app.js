import express from 'express';
import usuarioRoute from './routes/usuarios.routes.js';

const app = express();

// Middleware para JSON no body
app.use(express.json());

// Rota de usuários
app.use(usuarioRoute);

export default app;