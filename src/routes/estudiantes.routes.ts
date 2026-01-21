import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { upload } from "../config/multer";
import { listAllStudentsController, uploadStudentsController } from "../controllers/estudiantes.controller";

const router = Router();

router.post(
  "/estudiantes/carga",
  authMiddleware,
  upload.single("file"),
  uploadStudentsController
);

router.get("/estudiantes", authMiddleware, listAllStudentsController);

export default router;
