// Nama : Fino

function primeX(n) {
    let primes = [];
    for (let i = 2; primes.length < n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// Output
console.log(primeX(10)); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]