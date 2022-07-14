import express from "express";
import cors from "cors";
import { CONFIG } from "./config";
import { router } from "./routes/routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

app.listen(CONFIG.PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${CONFIG.PORT}`);
});
