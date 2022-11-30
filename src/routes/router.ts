import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import {
  AlunosController,
  ConvidadosController,
  BooksController,
} from "../controllers";

const router = Router();
const alunosController = new AlunosController();
const convidadosController = new ConvidadosController();
const booksController = new BooksController();

router.get("/alunos", isAuthenticated, alunosController.index);
router.get("/alunos/:id", isAuthenticated, alunosController.getById);
router.post("/alunos", isAuthenticated, alunosController.store);
router.delete("/alunos/:id", isAuthenticated, alunosController.destroy);

router.get("/convidados", convidadosController.index);
router.post("/convidados", convidadosController.save);
router.delete("/convidados/:nome", convidadosController.destroy);

router.get("/livros", booksController.index);
router.get("/livros/:id", booksController.getById);
router.post("/livros", booksController.store);
router.put("/livros", booksController.edit);
router.patch("/livros/:id", booksController.editParams);
router.delete("/livros/:id", booksController.destroy);

export { router };
