import { Request, Response } from "express";
import validator from "validator";

import { AlunosServices, AlunoInterface } from "../services";

const alunosServices = new AlunosServices();
class AlunosController {
  index(req: Request, res: Response) {
    const result = alunosServices.getAll();
    res.json(result);
  }

  getById(req: Request, res: Response) {
    const { id } = req.params;
    if (!validator.isNumeric(id)) {
      return res
        .status(400)
        .send({ mensagem: "O 'ID' deve ser um número válido!" });
    }

    const result = alunosServices.getById(Number(id));

    if (result) {
      return res.status(200).json(result);
    }

    res.status(404).json({ msg: "Aluno não encontrado!" });
  }

  store(req: Request, res: Response) {
    const { nome, sobrenome, idade, curso } = req.body;

    const errors = AlunosController.verifyErrors(nome, sobrenome, idade, curso);

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    const newAluno: AlunoInterface = {
      id: undefined,
      nome,
      sobrenome,
      idade,
      curso,
    };

    alunosServices.merge(newAluno);

    return res.status(201).json({});
  }

  destroy(req: Request, res: Response) {
    const id = req.params.id;

    if (!validator.isNumeric(id)) {
      return res
        .status(400)
        .json({ mensagem: "O ID deve ser um número válido!" });
    }

    const result = alunosServices.remove(Number(id));

    if (!result) {
      return res
        .status(404)
        .json({ mensagem: `Aluno com o ID = ${id} não foi encontrado!` });
    }
    res.status(200).json({});
  }

  private static verifyErrors(
    nome: string,
    sobrenome: string,
    idade: number,
    curso: string
  ) {
    const errors = [];

    if (!nome || validator.isEmpty(nome.trim())) {
      errors.push("O nome é obrigatório!");
    }

    if (!sobrenome || validator.isEmpty(sobrenome.trim())) {
      errors.push("O sobrenome é obrigatório!");
    }

    if (typeof idade != "number") {
      errors.push("A idade deve ser uma numero válido!");
    }

    if (idade < 18) {
      errors.push("A idade precisa se maior que 18");
    }

    if (!curso || validator.isEmpty(curso.trim())) {
      errors.push("O curso é obrigatório!");
    }
    return errors;
  }
}

export { AlunosController };
