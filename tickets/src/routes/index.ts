import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets', async (req: Request, res: Response) => {
  console.log("finding tickets");
  const tickets = await Ticket.find({});

  res.send(tickets);
});

export { router as indexTicketRouter };
