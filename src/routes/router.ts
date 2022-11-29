import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { AlunosController } from "../controllers";
import { ConvidadosController } from "../controllers";

const router = Router();
const alunosController = new AlunosController();
const convidadosController = new ConvidadosController();

router.get("/alunos", isAuthenticated, alunosController.index);
router.get("/alunos/:id", isAuthenticated, alunosController.getById);
router.post("/alunos", isAuthenticated, alunosController.store);
router.delete("/alunos/:id", isAuthenticated, alunosController.destroy);

router.get("/convidados", convidadosController.index);
router.post("/convidados", convidadosController.save);
router.delete("/convidados/:nome", convidadosController.destroy);

export { router };
