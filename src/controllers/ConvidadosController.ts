import { Request, Response } from "express";
import { ConvidadoService } from "../services";

const convidadoService = new ConvidadoService();

class ConvidadoController {
  index(req: Request, res: Response) {
    const convidados = convidadoService.getAll();
    res.status(200).send({ convidados: convidados });
  }
}

export { ConvidadoController };
