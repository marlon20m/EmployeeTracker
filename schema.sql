CREATE DATABASE Employee_db;

USE Employee_db;

CREATE TABLE department(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    primary key (id)
);

CREATE TABLE role(
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER,
    primary key (id)
);

CREATE TABLE employee(
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER ,
    primary key (id)
);



