import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import validator from "validator";

dotenv.config();

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const password = req.query.password as string;

  if (!password) {
    return res.status(400).send({ mensagem: "Senha obrigatória!" });
  }

  const validPassword = validator.equals(
    password,
    process.env.PASSWORD_AUTHENTICATE as string
  );
  if (!validPassword) {
    return res.status(401).send({ mensagem: "Senha inválida!" });
  }
  next();
}
