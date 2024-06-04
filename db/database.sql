CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

CREATE TABLE empleados (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE empleados;

INSERT INTO empleados VALUES
(1, 'Carlos', 1000),
(2, 'Maria', 1500),
(3, 'Juan', 2000),
(4, 'Pedro', 2500);
