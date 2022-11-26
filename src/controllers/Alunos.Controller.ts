import { Request, Response } from "express";
import validator from "validator";

import { Alunos } from "../services";

const alunos = new Alunos();

class AlunosController {
  index(req: Request, res: Response) {
    const result = alunos.getAlunos();
    res.json(result);
  }

  getById(req: Request, res: Response) {
    const { id } = req.params;
    if (!validator.isNumeric(id)) {
      return res
        .status(400)
        .send({ mensagem: "O 'ID' deve ser um número válido!" });
    }

    const result = alunos.getById(Number(id));

    if (result) {
      return res.status(200).json(result);
    }

    res.status(404).json({ msg: "Aluno não encontrado!" });
  }
}

export { AlunosController };
