import express from "express";
import dotenv from "dotenv";
import { AlunosRouter } from "./routes";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(AlunosRouter);

app.listen(PORT, () => {
  console.log(
    `Sever is running on the port ${PORT}\nhttp://localhost:${PORT}\nControl+c stop to it`
  );
});
