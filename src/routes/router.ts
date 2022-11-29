import { Router, Request, Response } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { AlunosController } from "../controllers";
import { ConvidadoController } from "../controllers";

const router = Router();
const alunosController = new AlunosController();
const convidadoController = new ConvidadoController();

router.get("/", (req: Request, res: Response) => {
  res.send("Página Principal");
});

router.get("/alunos", isAuthenticated, alunosController.index);
router.get("/alunos/:id", isAuthenticated, alunosController.getById);
router.post("/alunos", isAuthenticated, alunosController.store);
router.delete("/alunos/:id", isAuthenticated, alunosController.destroy);

router.get("/convidados", convidadoController.index);
router.post("/convidados", convidadoController.save);

export { router };
