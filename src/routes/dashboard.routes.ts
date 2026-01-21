import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { dashboardMetricsController } from "../controllers/dashboard.controller";

const router = Router();

router.get("/dashboard/metrics", authMiddleware, dashboardMetricsController);

export default router;
