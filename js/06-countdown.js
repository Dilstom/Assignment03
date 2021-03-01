let counts = parseInt(prompt('Please enter any positive integer'));

if(!isNaN(counts) && counts > 0){
    for( let i = counts; i>=0; i--){
        document.write(i + '<br>')
    }
} else {
    document.write('Please enter valid positive integer')
}

