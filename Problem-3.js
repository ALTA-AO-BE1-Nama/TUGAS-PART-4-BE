// Nama : Fino

function generatePrimeRectangle(start, high, wide) {
    let primes = [];
    let sum = 0;
    let count = 0;

    function isPrime(num) {
        for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }

    for(let i = start + 1; count < high * wide; i++) {
        if(isPrime(i)) {
            primes.push(i);
            sum += i;
            count++;
        }
    }

    for(let i = 0; i < high; i++) {
        let row = '';
        for(let j = 0; j < wide; j++) {
            row += primes[i * wide + j] + ' ';
        }
        console.log(row);
    }


    console.log('Jumlah semua bilangan prima: ' + sum);
}

// Output
generatePrimeRectangle(1, 3, 4);
// Hasil :
// 2 3 5 7 
// 11 13 17 19 
// 23 29 31 37 
// Jumlah semua bilangan prima: 197