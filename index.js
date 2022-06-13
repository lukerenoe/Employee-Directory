const inquirer = require('inquirer');
const db = require('./server');


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

function viewDepartments() {
    db.query("SELECT * FROM departments", function (err, res){
        if (err) {
            throw err
        }
        console.table(res)
        questionPrompt()
    })
}

function viewRoles() {
    db.query("SELECT * FROM roles", function (err, res){
        if (err) {
            throw err
        }
        console.table(res)
        questionPrompt()
    })
}

function viewEmployees() {
    db.query("SELECT * FROM employees", function (err, res){
        if (err) {
            throw err
        }
        console.table(res)
        questionPrompt()
    })
}


function addEmployee() {
    db.query("SELECT * FROM roles", function (err, res) {
        if (err) {
            throw err
        }
        inquirer.prompt([
            {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
            },
            {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
            },
            {
            type: "list",
            name: "role_title",
            message: "What is their role?", 
            choices: res.map(role => role.title)
            },
            {
            type: "list",
            name: "manager_id",
            message: "What is their manager id?",
            choices: ["1"]
            }
        ]) .then(response => {
            const roleResponse = res.find(role => role.title === response.role_title)
            db.query("INSERT INTO employees SET ?", {
                first_name: response.first_name,
                last_name: response.last_name,
                role_id: roleResponse.id,
                manager_id: response.manager_id
            })
console.log("New Employee Added")
questionPrompt()
        })
    })
}

function employeeRoleUpdate() {
db.query("SELECT * FROM employees", function (err, res) {
    if (err) {
        throw err
    }
    inquirer.prompt([
        {
            type: "list",
            name: "employee_name",
            message: "Which employee has the new role?",
            choices: res.map(employee => employee.first_name)
        }
    ]) .then(response => {
        const name = response.employee_name
        db.query("SELECT * FROM roles", (err, res) => {
            if (err) {
                throw err
            }
            inquirer.prompt([{
                type: "list",
                name: "role_title",
                message: "What role do you want to give?",
                choices: res.map(role => role.title)
        }]) .then(response => {

            const roleTitle = res.find(role => role.title === response.role_title)
            db.query("UPDATE employees SET ? WHERE first_name = " + "'" + name + "'", {
                role_id: roleTitle.id
            })
console.log("Employee Updated")
questionPrompt()
        })
        })
    })
})
}

function addDepartment() {
    db.query("SELECT * FROM departments", function (err, res) {
    if (err) {
        throw err
    }
    inquirer.prompt([
        {
            type: "input",
            name: "department_name",
            message: "What is the name of the department?"
            },
            {
            type: "input",
            name: "department_id",
            message: "What is the department id?"
            }
    ])
    .then(response => {
        res.find(department => department.title === response.department_title)
        db.query("INSERT INTO departments SET ?", {
            department_name: response.department_name,
            department_id: response.department_id
        })
    })
})
console.log("New Department Added");
}


// function addDepartment() {
//     db.query("SELECT * FROM departments", function (err, res) {
//         if (err) {
//             throw err
//         }
//     inquirer.prompt([
//         {
//             type: "input",
//             message: "Enter Department Name:",
//             name: "deptName"
//         }
//     ])
//         .then((answers) => {
//             db.query("INSERT INTO departments SET ? ", [answers.deptName], (err, res) => {
//                 if (err) throw err;
//                 console.log(`"${answers.deptName}" Added as new Department`);

//                 endChoice();
//             })
//         })

//     })
// };