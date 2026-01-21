# 📚 API – Sistema de Gestión Estudiantil

Backend del sistema de gestión estudiantil.  
Provee autenticación con JWT, carga masiva de estudiantes vía CSV y endpoints para métricas y listados.

---

## 🛠️ Tecnologías

- Node.js
- TypeScript
- Express
- Prisma ORM
- MySQL
- JWT (jsonwebtoken)
- bcrypt
- multer
- csv-parse
- pnpm

---

## Instalacion y ejecucion
Clonar el repositorio web
```bash
git clone https://github.com/kevin-lovos-dev/api-ambito-educativo
```

Acceder a la carpeta
```bash
cd api-ambito-educativo
```

Instalar dependencias
```bash
pnpm install
```

## Configuración de Base de Datos (MySQL)
Creamos la base de datos
```bash
CREATE DATABASE ambito_educativo;
```

La usamos
```bash
use ambito_educativo;
```

## Variables de entornos
Recuerda que si configuraste un usuario y contraseña, de poner las credenciales
```bash
DATABASE_URL="mysql://root@localhost:3306/ambito_educativo"
JWT_SECRET="super_secret_key"
PORT=3000
```

## Migraciones
Ejecutar migraciones
```bash
pnpm prisma migrate dev
```

Generar prisma client
```bash
pnpm prisma generate
```

## Usuario administrador inicial

Se crea un usuario administrador para iniciar sesión:

- Email: admin@admin.com

- Password: admin123!

- Rol: ADMIN

Ejecutar el seed:
```bash
pnpm ts-node src/seed/admin.ts
```

Ejecutar proyecto
```bash
pnpm dev
```


