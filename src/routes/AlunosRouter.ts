import { Router, Request, Response } from "express";
import { AlunosController } from "../controllers";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();
const alunosController = new AlunosController();
router.get("/", (req: Request, res: Response) => {
  res.send("Página Principal");
});

router.get("/alunos", isAuthenticated, alunosController.index);
router.get("/alunos/:id", isAuthenticated, alunosController.getById);
router.post("/alunos", isAuthenticated, alunosController.store);
router.delete("/alunos/:id", isAuthenticated, alunosController.destroy);

export { router as AlunosRouter };
