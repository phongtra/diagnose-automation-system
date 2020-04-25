import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import SymptomRoute from './routes/symptoms';
import DiagnosesRoute from './routes/diagnoses';
import IssuesInfoRoute from './routes/issueInfo';
import swaggerDocs from './swagger';

const app = express();

app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.send('hello');
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/symptoms', SymptomRoute);
app.use('/diagnosis', DiagnosesRoute);
app.use('/issues', IssuesInfoRoute);

export default app;
