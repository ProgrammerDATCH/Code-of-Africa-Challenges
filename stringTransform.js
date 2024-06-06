function transformString(str) {
    const length = str.length;

    if (length % 15 === 0) {
        return toAscii(reverseString(str));
    } else if (length % 5 === 0) {
        return toAscii(str);
    } else if (length % 3 === 0) {
        return reverseString(str);
    } else {
        return str;
    }
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function toAscii(str) {
    return str.split('').map(char => char.charCodeAt(0)).join(' ');
}

console.log(transformString("Hamburger"));
console.log(transformString("Pizza"));
console.log(transformString("Chocolate Chip Cookie"));