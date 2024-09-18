const prompt = require('prompt-sync')();

function main(){
    console.log('-----Menu-----');
    console.log('1 - Deposit budget amount');
    console.log('2 - View total expenses.');
    console.log('3 - check budget');
    console.log('4 - remove an expense');
    console.log('5 - exit the program');
}
let exit = false;
let budget = 0;
let expenses = [];

while (!exit){
    main()
    let input = parseInt(prompt('Select an option: '));
    
    switch (input) {
        case 1:
            deposit();
            break;
        case 2:
            view();
            break;
        case 3:
            check();
            break;
        case 4:
            remove();
            break;
        case 5:
            exit = true;
            break;
        default:
            console.log('Please enter a valid option.');
    }
    

}


function deposit() {
    let budget = parseInt(prompt(`How much is your budget?`));  

    while (isNaN(budget)) {
        console.log('Please enter a valid number.');
        budget = parseInt(prompt(`How much is your budget?`));  
    }

    console.log(`Your budget is: ${budget}`);
}

function view() {
    if (expenses.length === 0) {
        console.log('No transactions found.');
    } else {
        console.log('All Transactions:');
        for (let i = 0; i < expenses.length; i++) {
            console.log(`${i + 1}. Category: ${expenses[i].category}, Amount: $${expenses[i].amount}`);
        } 
    }
}

function getTotalSpent() {
    let total = 0;
    for (let expense of expenses) {
        total += expense.amount;
    }
    return total;
}


function check() {
    let totalSpent = getTotalSpent();
    let remainingBudget = budget - totalSpent;

    console.log(`Your total budget is: $${budget}`);
    console.log(`You have spent: $${totalSpent}`);

    if (remainingBudget > 0) {
        console.log(`You have $${remainingBudget} remaining.`);
    } else if (remainingBudget === 0) {
        console.log(`You've spent exactly your budget.`);
    } else {
        console.log(`You have overspent by $${Math.abs(remainingBudget)}.`);
    }
}

function remove(){
    if (expenses.length === 0) {
        console.log('No expenses to remove.');
        return;
    }

    let category = prompt('Enter the category of the expense you want to remove: ');

       for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].category.toLowerCase() === category.toLowerCase()) {
            let removedExpense = expenses.splice(i, 1);  
            console.log(`Removed expense: Category: ${removedExpense[0].category}, Amount: $${removedExpense[0].amount}`);
            return;
        }
    }

    console.log(`No expenses found for category: ${category}`);
}


// expense.category = 'food'
// expense.amount = 25;
// expenses.push(espense);

// expenses.push([10,'food']);
// expenses.push([99,'entertainment'])

// let y = expenses[1][0];
// console.log(y);









// let budget = prompt(`How much is your budget?`);


// console.log(parseInt(budget));
// console.log('your budget is',budget);

// let addexpense = prompt('enter your expense');
// budget -= addexpense;
// let category = prompt('What is the category of the expense?');
// console.log('your ballance is', budget);

// let $category =[];
// $category.push(addexpense);

// console.log($category);
