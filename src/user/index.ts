import { Request, Response } from 'express';
import { UserDao } from './user.dao';
import { userSchema } from './user.schema';

export const handlerUser = () => async (req: Request, res: Response) => {
  const body: UserDao = req.body;
  try {
    const validated = await userSchema.validate(body);
    res.send({ validated: validated });
  } catch (err) {
    console.error(err.errors);
    res.status(400).json({ err: err.errors });
  }
};
