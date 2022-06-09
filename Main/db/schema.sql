DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    job_title VARCHAR (30),
    FOREIGN KEY (department_id),
    REFERENCES departments(id),
    ON DELETE SET NULL
);

CREATE TABLE roles (
    job_title VARCHAR(30),
    role_id INT,
    salary INT,
    FOREIGN KEY (department_id),
    REFERENCES departments(id),
    ON DELETE SET NULL
);