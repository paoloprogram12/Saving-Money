const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the amount of money you want to save up to: ", function(moneyGoal) {
  console.log("Your goal is to save: $" + moneyGoal);

  rl.question("Enter in how many days you want to reach this goal: ", function(numDays) {
    console.log("You want to obtain $" + moneyGoal + " in " + numDays + " days.");

    rl.close();
  });
});
