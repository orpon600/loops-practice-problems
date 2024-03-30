var x = 50000;

if (x > 80000) {
  // This condition seems a bit redundant as it's very high and doesn't lead to a different outcome than the >60000 condition
  console.log(
    "You have a lot of money, consider buying a high-end gaming laptop."
  );
} else if (x > 60000) {
  console.log("You can buy a gaming laptop.");
} else if (x > 40000) {
  console.log("You can buy a Lenovo Yoga.");
} else if (x > 20000) {
  console.log("You can buy a used laptop.");
} else {
  console.log("It's best to use your mobile phone for now.");
}
