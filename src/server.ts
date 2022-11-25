import express from "express";
import dotenv from "dotenv";
import { router } from "./router";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(
    `Sever is running on the port ${PORT}\nhttp://localhost:${PORT}\nControl+c stop to it`
  );
});
