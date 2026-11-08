import express from 'express';
import path from 'path';

const app = express();

app.use(express.json());

// serve the frontend (index.html, css, js) as static files
app.use(express.static(path.join(import.meta.dirname, '../../frontend')));

import categoryRouter from './routes/category.route.js';
import userRoutes from './routes/user.route.js';

// routes declaration
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/users', userRoutes);

export default app;
