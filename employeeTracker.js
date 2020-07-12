var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Marlon123",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "selection",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "Add Employee",
                "Add Department",
                "Add Role",
                "View Department",
                "View Role",
                "View Employee",
                "Update Employee"
            ]
        })
        .then(function (answer) {
            switch (answer.selection) {
                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "View Department":
                    viewDepartment();
                    break;

                case "View Role":
                    viewRole();
                    break;

                case "View Employee":
                    viewEmployee();
                    break;

                case "Update Employee":
                    updateEmployee();
                    break;
            }
        });
}

function addEmployee() {
    inquirer.prompt([{
        type: "input",
        message: "What employee do you want to add?",
        name: "worker"

    }]).then(function (answer) {
        connection.query("insert into employee(name) values(?)", answer.worker, function (error) {
            console.log("employee added")
            runSearch()
        })
    })
}

function addDepartment() {
    inquirer.prompt([{
        type: "input",
        message: "What department do you want to add?",
        name: "dept"

    }]).then(function (answer) {
        connection.query("insert into department(name) values(?)", answer.dept, function (error) {
            console.log("department added")
            runSearch()
        })
    })
}


function addRole() {

}

function viewDepartment() {
    connection.query("select * from department", function (error, data) {
        console.table(data)
        runSearch()
    })

}

function viewRole() {

}

function viewEmployee() {
    connection.query("select * from employee", function (error, data) {
        console.table(data)
        runSearch()
    })
}

function updateEmployee() {

}