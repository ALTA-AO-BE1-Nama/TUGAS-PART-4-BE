// Nama : Fino

function cekPalindrome(str) {
    // string huruf kecil
    str = str.toLowerCase();

    // Buat string reverse
    let reversedStr = str.split('').reverse().join('');

    // Jika string awal dan string reverse sama, maka string tersebut palindrome
    if (str === reversedStr) {
        return true;
    } else {
        return false;
    }
}

// Output
console.log(cekPalindrome('Katak')); // Output: true
console.log(cekPalindrome('Fino')); // Output: false