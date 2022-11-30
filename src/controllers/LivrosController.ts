import { Request, Response } from "express";
import validator from "validator";

import { BooksService } from "../services";

const booksService = new BooksService();

class BooksController {
  index(req: Request, res: Response) {
    const books = booksService.getAll();
    res.status(200).json(books);
  }

  getById(req: Request, res: Response) {
    const id = req.params.id;

    if (!Number(id)) {
      return res.status(404).json({
        mensagem: "O valor do parâmetro ID da URL não é um número válido.",
      });
    }

    const book = booksService.getById(Number(id));

    if (!book) {
      return res
        .status(404)
        .json({ mensagem: "Não existe livro para o ID informado." });
    }

    res.status(200).json(book);
  }

  store(req: Request, res: Response) {
    const { title, author, year, numPag } = req.body;

    const errors = BooksController.entryValidate(title, author, year, numPag);

    if (errors.length > 0) {
      return res.status(404).json({ errors: errors });
    }

    const newBook = {
      id: null,
      title,
      author,
      year: Number(year),
      numPag: Number(year),
    };

    const result = booksService.merge(newBook);

    return res.status(201).json(result);
  }

  edit(req: Request, res: Response) {
    const { id, title, author, year, numPag } = req.body;

    const errors = BooksController.entryValidate(title, author, year, numPag);

    if (!id) {
      errors.push("O ID é obrigatório.");
    } else if (!validator.isNumeric(String(id))) {
      errors.push("Formato incorreto para o ID.");
    }

    if (errors.length > 0) {
      return res.status(404).json({ errors: errors });
    }

    const newBook = {
      id: Number(id),
      title,
      author,
      year: Number(year),
      numPag: Number(year),
    };

    const result = booksService.merge(newBook);

    if (!result) {
      return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    return res.status(200).json(result);
  }

  private static entryValidate(
    title: string,
    author: string,
    year: number,
    numPag: number
  ) {
    const errors = [];

    if (!title) {
      errors.push("O titulo é obrigatório.");
    }

    if (!author) {
      errors.push("O autor é obrigatório.");
    }

    if (!year) {
      errors.push("O ano é obrigatório.");
    } else if (!validator.isNumeric(String(year))) {
      errors.push("Formato incorreto para o ano.");
    }

    if (!numPag) {
      errors.push("O número de paginas é obrigatório.");
    } else if (!validator.isNumeric(String(numPag))) {
      errors.push("Formato incorreto para o número de páginas.");
    }
    return errors;
  }
}

export { BooksController };