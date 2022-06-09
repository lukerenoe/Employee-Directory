const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;

// Connect to database
const db = mysql.createConnection(
    {
    host: 'localhost',
      // MySQL username,
    user: 'root',
      // TODO: Add MySQL password here
    password: 'NEW_USER_PASSWORD',
    database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});