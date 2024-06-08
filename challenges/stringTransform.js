function transformString(str) {
    const len = str.length;

    if (len % 15 === 0) {
        // If divisible by 15, reverse and then replace each character with its ASCII code
        return str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (len % 3 === 0) {
        // If divisible by 3, reverse the entire string
        return str.split('').reverse().join('');
    } else if (len % 5 === 0) {
        // If divisible by 5, replace each character with its ASCII code
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // If none of the conditions are met, return the string as is
        return str;
    }
}

// Test Cases
console.log(transformString("Hamburger")); // Expected: "regrubmaH"
console.log(transformString("Pizza")); // Expected: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Expected: "eikooCpihCetalocohC"
console.log(transformString("Hello")); // Expected: "72 101 108 108 111" (length is 5)
console.log(transformString("Goodbye")); // Expected: "eybdooG" (length is 7, not divisible by 3 or 5)
console.log(transformString("Transform")); // Expected: "mrofsnarT" (length is 9, divisible by 3)
console.log(transformString("Programming")); // Expected: "103 110 105 109 109 97 114 103 111 114 80" (length is 11, not divisible by 3 or 5)
console.log(transformString("JavaScript")); // Expected: "74 97 118 97 83 99 114 105 112 116" (length is 10, divisible by 5)
console.log(transformString("123456789012345")); // Expected: "53 52 51 50 49 48 57 56 55 54 51 52 51 50 49" (length is 15, divisible by 15)
console.log(transformString("Short")); // Expected: "Short" (length is 5, so ASCII transformation)
