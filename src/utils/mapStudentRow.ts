export type CsvStudentRow = {
    nombre_estudiante: string;
    anio_inicio: string;
    anio_fin?: string;
    promedio_graduacion?: string;
    promedio_actual?: string;
    centro_escolar: string;
    NUE: string;
    estado: "activo" | "graduado";
  };
  
  export const mapStudentRow = (row: Record<string, string>) => {
    return {
      nombreEstudiante: row.nombre_estudiante,
      anioInicio: Number(row.anio_inicio),
      anioFin: row.anio_fin ? Number(row.anio_fin) : null,
      promedioGraduacion: row.promedio_graduacion
        ? Number(row.promedio_graduacion)
        : null,
      promedioActual: row.promedio_actual
        ? Number(row.promedio_actual)
        : null,
      centroEscolar: row.centro_escolar,
      NUE: row.NUE,
      estado: row.estado === "graduado" ? "graduado" : "activo",
    };
  };
  