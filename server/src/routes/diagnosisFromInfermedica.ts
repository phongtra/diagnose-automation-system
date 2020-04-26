// For the infermedica API specifically for Covid19


import { Router, Request, Response } from 'express';
import infermAPI from '../agent/infermAPI';

const router = Router();

interface DiagnosisRequestWithQuery extends Request {
  query: {
    evidence: any;
    sex: string;
    age: any;
  };
}

router.post('/', async (req: DiagnosisRequestWithQuery, res: Response) => {
  const { evidence, sex, age} = req.query;
  try {
    const response = await infermAPI.getTriageFromInfermedica(evidence, sex, age);
    res.send(response.data);
  } catch (e) {
    res.send(e);
  }
});

export default router;