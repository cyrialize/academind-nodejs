const fs = require('fs');
const path = require('path');

module.exports = class Product {

    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(
            path.dirname(require.main.filename), 
            'data', 
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }

            // It's important to use an arrow function here so that 'this' refers to the class
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    // A callback function is used here as readFile is async
    // callback function will be called once readFile is done
    // If there was no error function then undefined is returned as readFile isn't completed
    static fetchAll(cb) {
        const p = path.join(
            path.dirname(require.main.filename), 
            'data', 
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
};