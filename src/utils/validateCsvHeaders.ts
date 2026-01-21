export const EXPECTED_HEADERS = [
    "nombre_estudiante",
    "anio_inicio",
    "anio_fin",
    "promedio_graduacion",
    "promedio_actual",
    "centro_escolar",
    "NUE",
    "estado",
  ];
  

export const validateCsvHeaders = (headers: string[], expected: string[]) => {
    const normalized = headers.map(h => h.trim());
    const missing = expected.filter(h => !normalized.includes(h));
    const extra = normalized.filter(h => !expected.includes(h));
  
    return {
      valid: missing.length === 0 && extra.length === 0,
      missing,
      extra,
    };
  };
  