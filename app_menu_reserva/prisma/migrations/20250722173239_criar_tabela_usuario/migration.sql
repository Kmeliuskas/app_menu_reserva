-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_completo` VARCHAR(191) NOT NULL,
    `nome_usuario` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `dt_nascimento` DATETIME(3) NOT NULL,
    `end_atual` VARCHAR(191) NOT NULL,
    `end_permanente` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `pais` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuario_nome_usuario_key`(`nome_usuario`),
    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
