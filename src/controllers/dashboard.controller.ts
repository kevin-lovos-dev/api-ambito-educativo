import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const dashboardMetricsController = async (
  req: Request,
  res: Response
) => {
  try {
    const [total, activos, graduados] = await Promise.all([
      prisma.student.count(),
      prisma.student.count({
        where: { estado: "activo" },
      }),
      prisma.student.count({
        where: { estado: "graduado" },
      }),
    ]);

    return res.json({
      total,
      activos,
      graduados,
    });
  } catch (error: any) {
    return res.status(500).json({
      error: "Error obteniendo métricas del dashboard",
      detail: error.message,
    });
  }
};
