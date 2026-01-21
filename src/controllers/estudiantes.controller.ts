import { Request, Response } from "express";
import { parse } from "csv-parse/sync";
import {
  EXPECTED_HEADERS,
  validateCsvHeaders,
} from "../utils/validateCsvHeaders";
import { mapStudentRow, CsvStudentRow } from "../utils/mapStudentRow";
import { prisma } from "../lib/prisma";

export const uploadStudentsController = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: "Archivo no enviado" });
  }

  if (req.file.mimetype !== "text/csv") {
    return res.status(400).json({ error: "Solo CSV por ahora" });
  }

  const csvText = req.file.buffer.toString("utf-8");

  const records = parse(csvText, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as Record<string, string>[];

  if (!records.length) {
    return res.status(400).json({ error: "Archivo vacío" });
  }

  const headers = Object.keys(records[0]);
  const headerValidation = validateCsvHeaders(headers, EXPECTED_HEADERS);

  if (!headerValidation.valid) {
    return res.status(400).json({
      error: "Cabeceras inválidas",
      ...headerValidation,
    });
  }

  try {
    // 👉 CAST SEGURO después de validar headers
    const typedRecords = records as CsvStudentRow[];

    const studentsData = typedRecords.map(mapStudentRow);

    const result = await prisma.student.createMany({
      data: studentsData,
      skipDuplicates: true,
    });

    return res.json({
      message: "Estudiantes cargados correctamente",
      inserted: result.count,
    });
  } catch (error: any) {
    return res.status(400).json({
      error: "Error procesando el archivo",
      detail: error.message,
    });
  }
};

export const listAllStudentsController = async (
  req: Request,
  res: Response
) => {
  try {
    const students = await prisma.student.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json(students);
  } catch (error: any) {
    return res.status(500).json({
      error: "Error obteniendo estudiantes",
      detail: error.message,
    });
  }
};
