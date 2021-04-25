const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename), 
    'data', 
    'products.json'
);

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product {

    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        // Use arrow functions so that this refers to the class
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    // A callback function is used here as readFile is async
    // callback function will be called once readFile is done
    // If there was no error function then undefined is returned as readFile isn't completed
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};