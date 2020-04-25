import { Router, Request, Response } from 'express';
import rapidAPI from '../agent/rapidAPI';

const router = Router();

interface DiagnosesRequestWithQuery extends Request {
  query: {
    symptoms: string;
    gender: string;
    birthYear: string;
  };
}

router.get('/', async (req: DiagnosesRequestWithQuery, res: Response) => {
  const { symptoms, gender, birthYear } = req.query;
  try {
    const response = await rapidAPI.getDiagnoses(symptoms, gender, birthYear);
    res.send(response.data);
  } catch (e) {
    res.send(e);
  }
});

export default router;
