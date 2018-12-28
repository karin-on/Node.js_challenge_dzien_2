//Twój kod
const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf-8', (err, data) => {
    if (err === null) {
        console.log(data);

        let arr = JSON.parse(data);
        let sum = 0;
        arr.forEach(el => sum += el);

        fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
            if (err === null) {
                console.log('udalo sie');
            } else {
                console.log('blad zapisu: ' + err);
            }
        })

    } else {
        console.log('bład odczytu pliku: ' + err);
    }
});
