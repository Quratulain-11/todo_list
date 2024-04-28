import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGray);
console.log(chalk.red.bold("\n \tWelcome to Amazing todo list\t \n"));
let todos = [];
let condition = true;
while (condition === true) {
    let todo_ques = await inquirer.prompt([
        {
            name: "fques",
            type: "list",
            message: chalk.green.bold("select an option"),
            choices: ["Add", "remove"]
        }
    ]);
    if (todo_ques.fques === "Add") {
        let ans = await inquirer.prompt([
            {
                name: "inadd",
                type: "input",
                message: chalk.green.bold("would u like to add something in todo list!")
            }
        ]);
        if (ans.inadd !== '') {
            todos.push(ans.inadd);
            console.log(todos);
        }
        else {
            console.log(chalk.yellow("please write something to add in the todo list"));
        }
    }
    // remove
    else if (todo_ques.fques === "remove") {
        let remove_list = await inquirer.prompt([
            {
                name: "remove_item",
                type: "list",
                message: chalk.green.bold("select item to remove"),
                choices: todos
            }
        ]);
        let index_to_remove = todos.indexOf(remove_list.remove_item);
        if (index_to_remove >= 0) {
            todos.splice(index_to_remove, 1);
            console.log(chalk.yellowBright.bold('You remove :', remove_list.remove_item));
            console.log(todos);
        }
    }
    // cmfrm
    let user_ans = await inquirer.prompt([
        {
            type: "confirm",
            name: "selection",
            message: chalk.green.bold(" \n Do u want to continue?\n"),
            default: true
        }
    ]);
    if (user_ans.selection === false) {
        condition = false;
    }
}
;
console.log(chalk.redBright.bold('Thank you for using todo list😊'));
