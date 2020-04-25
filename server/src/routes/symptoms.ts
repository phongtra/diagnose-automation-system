import { Router, Request, Response } from 'express';
import rapidAPI from '../agent/rapidAPI';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const response = await rapidAPI.getSymptoms();
    res.send(response.data);
  } catch (e) {
    res.send(e);
  }
});

export default router;
