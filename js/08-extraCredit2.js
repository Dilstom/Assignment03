let futureValue, investment, rate, years;
let flag = false

investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
while(isNaN(investment) || investment < 0) {
    investment = parseFloat(prompt('Please enter valid positive investment amount as xxxx.xx'));
    // document.write('Please enter the valid number for investment')
} 

rate = parseFloat(prompt('Enter interest rate as xx.x'));
while(isNaN(rate) || rate < 0 || rate > 6) {
    rate = parseFloat(prompt('Please enter the valid interest rate as xx.x between 0 and 6'));

}

years = parseInt(prompt('Enter the number of years'));
while (isNaN(years) || years < 1 || years > 30) {
    years = parseInt(prompt('Please enter the valid number of years between 1 and 30'));
}

    

        futureValue = investment;
        
        for( let i=1; i <= years; i++) {
            futureValue = futureValue + (futureValue * rate /100);
        }
        
        document.write(`Investment amount: $${investment} <br>`)
        document.write(`Interest rate: $${rate} %<br>`)
        document.write(`Years: ${years} <br>`)
        document.write(`Future valuet: $${futureValue.toFixed(2)} <br>`)


