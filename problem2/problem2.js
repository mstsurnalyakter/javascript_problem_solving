/**
 * to get the extension of a filename
 */

const getFileExtension = str => str.slice(str.lastIndexOf("."));
console.log(getFileExtension("index.html"));

const arr = ["index.js",'index.html','index.js','index.css'];

const extension = arr.map(value =>{
    return value.slice(value.lastIndexOf("."))
})

console.log(extension);