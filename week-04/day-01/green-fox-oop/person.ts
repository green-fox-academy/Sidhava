'use-strict';

class Person {
    name: string;
    age: number;
    gender: string;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, ${this.age}, ${this.gender}`);
    }

    getGoal(): void {
        console.log('My goal is: Live for the moment!');
    }
}

//let janeDoe: Person = new Person('Jane Doe', 30, 'female');

export { Person };