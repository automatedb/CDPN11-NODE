class MyObject {
    constructor(value) {
        this._property = 2;
        this._property2 = value;
    }

    setProperty(value) {
        this._property = value;
    }

    getProperty() {
        return this._property;
    }
}

const instantObject = new MyObject();
// console.log(instantObject._property); // => Bad
console.log(instantObject.getProperty());

instantObject.setProperty(10);
console.log(instantObject.getProperty());
