class Person {
    constructor(name, age) {
        this.name = name;
        if (age < 0) {
            throw new Error('Tuoi bi am');
        } else {
            this.age = age;
        }
    }
}

class MyError extends Error {
    constructor(name, code) {
        super(name);
        this.code = code;
    }
}

const a = new Person('Khoa', -1);