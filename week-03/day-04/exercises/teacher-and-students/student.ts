'use strict';

import { Teacher, Juhasz } from './teacher';

class Student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    learn(): string {
        return 'Student has just learnt a new thing.';
    }

    question(teacher: Teacher) {
        console.log(teacher.answer());
    }
}

let Dezso: Student = new Student('Dezso');

console.log(Dezso.question(Juhasz));
console.log(Juhasz.teach(Dezso));


export { Student, Dezso };