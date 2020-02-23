module.exports = function toReadable (number) {
let obj1 = {
    0: 'zero', 1: 'one',  2: 'two',  3: 'three',  4: 'four',  5: 'five',
    6: 'six',  7: 'seven',  8: 'eight',  9: 'nine',  10: 'ten',  11: 'eleven',
    12: 'twelve',  13: 'thirteen',  14: 'fourteen',  15: 'fifteen',  16: 'sixteen',
    17: 'seventeen',  18: 'eighteen',  19: 'nineteen',
    }

let obj10 = {
    20: 'twenty',  30: 'thirty',  40: 'forty',  50: 'fifty',
    60: 'sixty',  70: 'seventy',  80: 'eighty',  90: 'ninety',
    }

let obj100 = {
    100: 'one hundred',  200: 'two hundred',  300: 'three hundred',  400: 'four hundred',
    500: 'five hundred',  600: 'six hundred',  700: 'seven hundred',  800: 'eight hundred',
    900: 'nine hundred',
}

if (number < 20) {
    return obj1[number]
}


if (number >= 20 && number < 100) {
    let rest = number % 10;
    let full = number - rest
if (rest == 0) {
    return (`${obj10[full]}`)
}
return (`${obj10[full]} ${obj1[rest]}`)
}


if (number >= 100 && number < 1000) {
    let rest100 = number % 100;
    if (rest100 == 0) {
        return (`${obj100[number]}`)
    }
    if (rest100 > 0 && rest100 < 20) {
    let full = number - rest100
    return (`${obj100[full]} ${obj1[rest100]}`)
    } 
    if (rest100 >= 20) {
        let rest10 = number % 10;
        let rest100 = (number - rest10) % 100;
        let full = number - rest10 - rest100;
        if (rest10 == 0) {
            return (`${obj100[full]} ${obj10[rest100]}`)
        } else {
            return (`${obj100[full]} ${obj10[rest100]} ${obj1[rest10]}`)
        }
    }
}

}
