//Twój kod

const fs = require('fs');

// process.argv[2].

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err === null) {
        let newData = '';
        for (let i = 0; i < data.length; i++) {
            newData += i % 2 !== 0 ? data.charAt(i).toLowerCase() : data.charAt(i).toUpperCase();
        }
        console.log('sukces');

        fs.writeFile('./data/zadanieDnia/test2.txt', newData, err => {
            if (err === null) {
                console.log('zapisano');
            } else {
                console.log('blad przy zapisie' + err);
            }
        })

    } else {
        console.log('problemix');
    }
});
