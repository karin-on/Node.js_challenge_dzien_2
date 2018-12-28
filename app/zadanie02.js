//Twój kod

const fs = require('fs');

fs.readdir('./data/zadanie02', (err, files) => {
    if (err === null) {
        console.log('lista plikow:');
        files.forEach(el => console.log(el));
    } else {
        console.log('blad podczas listowania');
    }
})