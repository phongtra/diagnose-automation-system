import express, { Request, Response } from 'express';
import SymptomRoute from './routes/symptoms';
import DiagnosesRoute from './routes/diagnoses';
import IssuesInfoRoute from './routes/issueInfo';
const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('hello');
});

app.use('/symptoms', SymptomRoute);
app.use('/diagnosis', DiagnosesRoute);
app.use('/issues', IssuesInfoRoute);

export default app;
