USE employee_db;

INSERT INTO departments (department_name)
VALUES ("Financial"),
("Janitorial"),
("Bartenders"),
("Security");

INSERT INTO roles (title, salary, department_id)
VALUES ("Rat Basher", 60, 2),
("Golden God", 100, 3),
("Bird", 80, 3),
("The WartHog", 4000000, 1),
("Sheriff of Paddy's", 70, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Charlie", "Kelly", 1, 2),
("Frank", "Reynolds", 4, 1);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Dennis", "Reynolds", 2),
("Dee", "Reynolds", 3),
("Ronald", "Macdonald", 5);