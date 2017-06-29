class Person {
    constructor(name) {
        this._name = name || "J'ai pas de nom";
    }

    getName() {
        return this._name;
    }
}

module.exports = Person;