const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// questions to ask user for saving money
rl.question("Enter the amount of money you want to save up to: ", function(moneyGoal) {
  console.log("Your goal is to save: $" + moneyGoal);

  rl.question("Enter in how many days you want to reach this goal: ", function(numDays) {
    console.log("You want to obtain $" + moneyGoal + " in " + numDays + " days.");

    rl.question("Enter in how often you want to make deposits (1 for Weeks, 2 for Months, 3 for Days): ", function(depositOption) {
        if (depositOption == 1) { console.log("You chose every week"); }
        else if (depositOption == 2) { console.log("You chose every month"); }
        else if (depositOption == 3) { console.log("You chose every day"); }

        rl.close();
    });
  });
});

function generatePlan(moneyGoal, numDays, depositOption) {
    let deposit;
    if ((depositOption == 1) && (numDays > 7)) {
        deposit = moneyGoal;
    }
}
