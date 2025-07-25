-- CreateTable
CREATE TABLE `Espera_Digital` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_completo` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dia_da_reserva` VARCHAR(191) NOT NULL,
    `horario` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `qtd_pessoas` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NULL,
    `observacoes` VARCHAR(191) NULL,

    UNIQUE INDEX `Espera_Digital_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
