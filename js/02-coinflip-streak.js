let coinFlip;

do {
    coinFlip = Math.round(Math.random());
    // console.log(coinFlip)
    coinFlip === 0 ? document.write('Heads <br>') : document.write("Tails <br>");
} while (coinFlip === 0);