const inquirer = require('inquirer');
const db = require('../server');


db.connect (function (err) {
    if (err) {
        throw err
    }
    questionPrompt()
})





function questionPrompt () {
    inquirer.prompt([
        {
        name: "userChoice",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View departments",
            "View roles",
            "View employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee role",
            "Exit"
        ]
        }])
        .then(function (response) {
        switch (response.userChoice) {
            case "View departments":
            viewDepartments();
            break;
            case "View roles":
            viewRoles();
            break;
            case "View employees":
            viewEmployees();
            break;
            case "Add a department":
            addDepartment();
            break;
            case "Add a role":
            addRole();
            break;
            case "Add an employee":
            addEmployee();
            break;
            case "Update employee role":
            employeeRoleUpdate();
            break;
            case "exit":
            connection.end();
            break;
        }
        });
}