/**
 * Write a JavaScript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more if not, the original string is return
 * 1. create function
 * 2. take a string as a parameter
 * 3. check the string length
 * 4. if length >= 3
 *      1. take first 3 characters
 *      2. take last 3 characters
 * 5. else return existing string
 */

const makeNewString = str =>{
    if (str.length >= 3) {
        const first3Char = str.slice(0, 3);
        const last3Char = str.slice(str.length - 3);
        const concatBoth = first3Char.concat(last3Char);
        return concatBoth;
    }else{
        return str;
    }
}
const str = "Surnaly";
console.log(makeNewString(str));
console.log(makeNewString("Mst"));
console.log(makeNewString("Md"));