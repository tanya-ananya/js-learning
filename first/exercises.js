// This program shows all the prime numbers in showPrimes' range
showPrimes(20);
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}
function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) 
            return false;
    return true;
}

// Prints the number of stars per row (for example, if input is 3
// then there will be one star in the first row, two in the second
// and three in the third.
showStars(3);
function showStars(rows) {
    for (let row = 0; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++) 
            pattern += '*'
        console.log(pattern)
    }
}


// This program calculates the average of the grades and returns the letter grade
const marks = [100, 100, 100]
console.log(calculateGrades(marks))
function calculateGrades(marks) {
    sum = 0
    for (let x = 0; x < marks.length; x++) {
        sum += marks[x]
    }
    avg = sum / (marks.length)

    if (avg >= 1 && avg <= 59) {
        return 'F';
    }
    else if (avg >= 60 && avg <= 69) {
        return 'D';
    }
    else if (avg >= 70 && avg <= 79) {
        return 'C';
    }
    else if (avg >= 80 && avg <= 89) {
        return 'B';
    }
    else {
        return 'A';
    }
}



// This finds and adds up all the multiples of 3 and 5 in a limit
console.log(sum(10));
function sum(limit) {
    count = 0;
    for (let i = 0; i < limit + 1; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            count += i;
    }
    return count;
}

// This checks for the typeof and prints only string
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
showProperties(movie);
function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

// Shows all the truthy values of the array 
const array = [0, null, 1, 2];
console.log(countTruthy(array));
function countTruthy(array) {
    count = 0
    for (let index of array) {
        if (index)
            count++;
    }
    return count;
}

// Shows the values and if they are even or odd
showNumbers(10);

function showNumbers(limit) {
    for (i = 0; i < limit + 1; i++) {
        if (i % 2 === 0) {
            console.log(i, 'EVEN')
        }
        else {
            console.log(i, 'ODD')
        }
    }
}