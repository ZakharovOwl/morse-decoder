const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrExpr = [];
    let arrKeys = [];
    let a = '';
    let result = '';

    for (let i = 0; i < expr.length; i = i + 10) {
        //console.log(expr.slice(0 + i, 10 + i));

        arrExpr.push(expr.slice(0 + i, 10 + i));
    }

    for (let i = 0; i < arrExpr.length; i++) {

        for (let j = 0; j <= arrExpr[i].length; j += 2) {
            if (arrExpr[i].slice(0 + j, 2 + j) == 10) { a += '.' }
            else if (arrExpr[i].slice(0 + j, 2 + j) == 11) { a += '-' }
            else if (arrExpr[i] == '**********') {
                a += ' ';
                break;
            };
        }
        arrKeys.push(a);
        a = '';
    }
    //console.log(arrKeys);
    //console.log(arrExpr);

    for (let i = 0; i < arrKeys.length; i++) {
        if (arrKeys[i] == ' ') {
            result = result + ' ';
            continue
        }
        else {
            result = result + MORSE_TABLE[arrKeys[i]];
        }
    }

    return result;
}

module.exports = {
    decode
}