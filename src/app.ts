import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import allRoutes from './routes/routes';
import SwaggerUi from 'swagger-ui-express';
import SwaggerDocs from './swagger.json';

const app = express();
app.use(json());

app.use('/v1', allRoutes);
app.use('/v1/documentation', SwaggerUi.serve, SwaggerUi.setup(SwaggerDocs));

app.use('/v1', (req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: 'Bem-vindo à API VetClinic!' });
    next(); 
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
