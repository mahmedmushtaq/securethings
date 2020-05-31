import {shuffleString} from "../stringhelpers";

export const CHAR_NUM_SYMBOL = "CHAR_NUM_SYMBOL";
export const CHARS_LOWER = "CHARS_LOWER";
export const CHARS_UPPER = "CHARS_UPPER";
export const CHARS_LOWER_UPPER = "CHARS_LOWER_UPPER";
export const ONLY_NUMBERS = "ONLY_NUMBERS";
export const NUMBERS_SYMBOLS = "NUMBERS_SYMBOLS";
export const CHARS_NUMBERS = "CHARS_NUMBERS";
export const CHARS_LOWER_NUMBERS = "CHARS_LOWER_NUMBERS";
export const CHARS_UPPER_NUMBERS = "CHARS_UPPER_NUMBERS";
export const CHARS_SYMBOLS = "CHARS_SYMBOLS";
export const ONLY_SYMBOLS = "ONLY_SYMBOLS";

const strinGenerator = (type=CHAR_NUM_SYMBOL)=>{
    let chars;

    const numbers    = '0123456789';
    const charsLower = 'abcdefghijklmnopqrstuvwxyz';
    const charsUpper = charsLower.toUpperCase();

    const symbols   = '!@#$%^&*()';

    if(type === CHAR_NUM_SYMBOL){
        chars = numbers + charsLower + charsUpper +  symbols;
    } else if(type === CHARS_LOWER){
        chars = charsLower;
    } else if(type === CHARS_UPPER){
        chars = charsUpper;
    } else if(type === CHARS_LOWER_UPPER){
        chars = charsLower + charsUpper;
    } else if(type === ONLY_NUMBERS){
        chars = numbers;
    } else if(type === NUMBERS_SYMBOLS){
        chars = numbers + symbols;
    } else if(type === CHARS_NUMBERS){
        chars = charsLower + charsUpper + numbers;
    } else if(type === CHARS_LOWER_NUMBERS){
        chars = charsLower + numbers;
    } else if(type === CHARS_UPPER_NUMBERS){
        chars = charsUpper + numbers;
    } else if(type === CHARS_SYMBOLS){
        chars = charsLower+ charsUpper + symbols;
    }else if(type === ONLY_SYMBOLS){
        chars = symbols;
    }

    return chars;

};

export const generatePasswordString = options=>{

    let password = "";

    if(options.numbers){
        password+=specificGenerator(ONLY_NUMBERS,options.numNumber);

    }if(options.chars_lower){
        password+=specificGenerator(CHARS_LOWER,options.charsLowerNumber);
    }if(options.chars_upper){
        password+=specificGenerator(CHARS_UPPER,options.charsUpperNumber);
    }if(options.symbols){
        password+=specificGenerator(ONLY_SYMBOLS,options.symbolsNumber);
    }


    return shuffleString(password);
}




const specificGenerator = (type,limit)=>{
    const stringGeneration = strinGenerator(type);
    let password = "";
    for (let i = 0; i < limit;i++){
        const randomnumber = Math.floor(Math.random() * ((stringGeneration.length-1) - 0 + 1)) + 0;
        password += stringGeneration.charAt(randomnumber);
    }

    return password;

}


