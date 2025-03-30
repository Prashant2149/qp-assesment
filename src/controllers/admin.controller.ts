import { Request, Response } from 'express';
import prisma from '../config/db';

export const addItem = async (req: Request, res: Response) => {
  const { name, price, stock } = req.body;
  const item = await prisma.groceryItem.create({ data: { name, price, stock } });
  res.json(item);
};

export const getItems = async (_req: Request, res: Response) => {
  const items = await prisma.groceryItem.findMany();
  res.json(items);
};

export const updateItem = async (req: Request, res: Response) => {
  
  const { id } = req.params;
  const { name, price, stock } = req.body;
  //console.log(req.params,'>>>>', id)
  const updatedItem = await prisma.groceryItem.update({
    where: { id: Number(id) },
    data: { name, price, stock },
  });
  res.json(updatedItem);
};

export const deleteItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.groceryItem.delete({ where: { id: Number(id) } });
  res.json({ message: 'Item deleted successfully' });
};