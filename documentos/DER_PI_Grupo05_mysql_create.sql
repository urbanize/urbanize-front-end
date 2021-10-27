CREATE TABLE `Usuario` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome_completo` varchar(255) NOT NULL,
	`usuario` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Postagem` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`titulo` varchar(255) NOT NULL,
	`texto` varchar(1000) NOT NULL,
	`midia` varchar(1000) NOT NULL,
	`data_postagem` TIMESTAMP NOT NULL,
	`contato` varchar(255) NOT NULL,
	`usuario_id` bigint NOT NULL,
	`tema_id` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Tema` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`tema` varchar(255) NOT NULL,
	`descricao` varchar(1000) NOT NULL,
	`palavras_chave` varchar(1000) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Postagem` ADD CONSTRAINT `Postagem_fk0` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario`(`id`);

ALTER TABLE `Postagem` ADD CONSTRAINT `Postagem_fk1` FOREIGN KEY (`tema_id`) REFERENCES `Tema`(`id`);




