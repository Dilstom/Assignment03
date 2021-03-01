let miles, gallons, mpg, again = 'y';

do {
    miles = parseFloat(prompt('Enter miles driven.'));
    gallons = parseFloat(prompt('How many gallons does your fuel tank hold?'));

    if (miles > 0 && gallons > 0) {
        mpg = miles/gallons;
        document.write(`Your car gets ${mpg.toFixed(2)} miles per gallon.`)
    }else {
        wridow.alert('One or both entries are invalid')
    }
    again = prompt('Run application again? (y or n)', 'y');
    while(again !== 'y' && again !== 'n') {
        again = prompt('Run application again? (y or n)', 'y');
        console.log('again: ', again)
    }
} while (again === 'y')