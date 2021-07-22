const { response } = require("express");
const exe = false;

let promesas = new Promise(function(resolve, reject) {
    if(exe) {
        resolve("Hola");
    }
    else {
        reject("Adios");
    }
});

promesas.then((response) => {
    console.log('response', response);
})
.catch((error) => {
    console.log('error', error);
})
