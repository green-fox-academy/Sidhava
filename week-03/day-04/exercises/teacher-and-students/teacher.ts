'use strict';

import { Student, Dezso } from './student';

class Teacher {
    name:string;

    constructor(name: string) {
        this.name = name;
    }

    teach(student: Student): void {
        console.log(student.learn());

    }

    answer(): string {
        return 'Teacher is answering a question.';
    }
}

let Juhasz: Teacher = new Teacher('Juhasz');

export { Teacher, Juhasz };