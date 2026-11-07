import express from 'express';
import path from 'path';

const app = express();

app.use(express.json());

// Serve the front-end (index.html, css, js) as static files
app.use(express.static(path.join(import.meta.dirname, '../../frontend')));

// routes will be here

export default app;
