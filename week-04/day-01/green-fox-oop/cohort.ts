'use strict';

import {Student} from './student';
import {Mentor} from './mentor';

class Cohort {
    name: string;
    students: Student[];
    mentors: Mentor[];

    constructor(name:string) {
        this.name = name;
        this.students = [];
        this.mentors = [];
    }

    addStudent(student: Student) {
        this.students.push(student);
    }

    addMentor(mentor: Mentor) {
        this.mentors.push(mentor);
    }

    info(): void {
        console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
    }
}

export {Cohort};