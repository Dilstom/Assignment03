let coinFlip;

let loopNumber = Number(
  prompt("The amount of times that the loop will be executed")
);

if (!isNaN(loopNumber) && loopNumber > 0 ) {
  for (let i = 0; i < loopNumber; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) document.write("Heads <br>");
    else document.write("Tails <br>");
  }
} else {
  document.write("Please enter a valid number greater than 0");
}
