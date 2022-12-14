import { Request, Response } from "express";
import { ConvidadoService } from "../services";

const convidadoService = new ConvidadoService();

class ConvidadosController {
  index(req: Request, res: Response) {
    const nome = req.query.nome as string;
    if (nome) {
      const convidado = convidadoService.getByName(nome);
      if (!convidado) {
        return res.status(400).json({
          mensagem: `Não foi possível encontrar ${nome} na lista de convidados!`,
        });
      }
      return res
        .status(200)
        .json({ mensagem: `O convidado(a) ${convidado} está presente` });
    }
    const convidados = convidadoService.getAll();
    res.status(200).send({ convidados: convidados });
  }

  save(req: Request, res: Response) {
    const { nome } = req.body;

    if (!nome) {
      return res.status(404).json({ mensagem: "O nome é obrigatório!" });
    }

    const convidadoAdd = convidadoService.save(nome);

    if (!convidadoAdd) {
      return res.status(404).json({
        mensagem: `O convidado(a) ${convidadoAdd} já está na lista.  Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.`,
      });
    }
    return res.status(201).json({ mensagem: "Convidado adicionado!" });
  }

  destroy(req: Request, res: Response) {
    const nome = req.params.nome as string;

    if (!nome) {
      return res.status(400).json({ mensagem: "O nome é obrigatório!" });
    }

    const result = convidadoService.remove(nome);

    if (!result) {
      return res.status(400).json({
        mensagem:
          "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.",
      });
    }

    res.status(200).json({ mensagem: "Convidado removido." });
  }
}

export { ConvidadosController };
