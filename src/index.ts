import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import estudiantesRoutes from "./routes/estudiantes.routes";
import dashboardRoutes from "./routes/dashboard.routes";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Rutas
app.use("/api", authRoutes);
app.use("/api", estudiantesRoutes);
app.use("/api", dashboardRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});
