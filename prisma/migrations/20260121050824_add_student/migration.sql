-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreEstudiante` VARCHAR(191) NOT NULL,
    `anioInicio` INTEGER NOT NULL,
    `anioFin` INTEGER NULL,
    `promedioGraduacion` DOUBLE NULL,
    `promedioActual` DOUBLE NULL,
    `centroEscolar` VARCHAR(191) NOT NULL,
    `NUE` VARCHAR(191) NOT NULL,
    `estado` ENUM('activo', 'graduado') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Student_NUE_key`(`NUE`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
