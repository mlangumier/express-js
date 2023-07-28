import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import heroesRoutes from "../routes/heroes/routes.js";
import usersRoutes from "../routes/users/routes.js";
import authRoutes from "../routes/auth/routes.js";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url)); //allows to serve static files

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = { credentials: true, origin: process.env.URL || "*" }; // Origin from ENV or all

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

app.get("/", express.static(join(__dirname, "../public"))); // Serves the static file ../public/index.html

app.use("/api/v1", authRoutes);
app.use("/api/v1/heroes", heroesRoutes);
app.use("/api/v1/users", usersRoutes);

app.listen(PORT, () =>
  console.log(`App listening on port http://localhost:${PORT}`)
);
