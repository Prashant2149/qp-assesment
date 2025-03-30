import { Request, Response, NextFunction } from 'express';
import prisma from '../config/db';

export const getItems = async (_req: Request, res: Response) => {
  const items = await prisma.groceryItem.findMany();
  res.json(items);
};

export const placeOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { userId, orderItems } = req.body;
    let totalAmount = 0;

    for (const item of orderItems) {
      const grocery = await prisma.groceryItem.findUnique({ where: { id: item.groceryId } });
      console.log(grocery,'grocery')
      if (!grocery || grocery.stock < item.quantity) {
        res.status(400).json({ message: 'Item out of stock' });
        return; // ✅ Ensure function exits after response
      }
      totalAmount += grocery.price * item.quantity;
    }

    const order = await prisma.order.create({
      data: {
        userId,
        totalAmount,
        orderItems: { create: orderItems },
      },
    });

    res.json(order); // ✅ Ensure response is sent
  } catch (error) {
    next(error); // ✅ Pass errors to Express error handler
  }
};

export const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, email, password, role } = req.body;

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      res.status(400).json({ message: "Email already in use" });
      return;
    }

    // Hash the password before storing

    // Create a new user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: password,
        role
      }
    });

    // Return user info without password
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};