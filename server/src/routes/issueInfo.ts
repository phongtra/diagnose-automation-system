import { Router, Request, Response } from 'express';
import rapidAPI from '../agent/rapidAPI';

const router = Router();

interface IssueRequestWithQuery extends Request {
  query: {
    id: string;
  };
}

router.get('/', async (req: IssueRequestWithQuery, res: Response) => {
  console.log('started');
  const { id } = req.query;
  try {
    const response = await rapidAPI.getIssueInfo(id);

    res.send(response.data);
  } catch (e) {
    res.send(e);
  }
});

export default router;
