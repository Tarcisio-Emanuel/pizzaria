import {Router, Request, Response } from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
  return res.json({ nome: 'Tarcisio' })
  // throw new Error("Error ao fazer a requisiçãoS")
})

export { router }; 