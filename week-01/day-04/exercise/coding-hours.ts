let semesterInWeeks: number = 17;
let attendeeCodesDaily: number = 6;
let weekDays = 5;
let addendeeCodesWeekly: number = attendeeCodesDaily * weekDays;
let codeSpentInSemester: number = addendeeCodesWeekly * semesterInWeeks;

let workHoursWeekly: number = 52;
let workHoursInSemester: number = workHoursWeekly * semesterInWeeks;
let percentageOfWorkingHours: number = codeSpentInSemester / (workHoursInSemester / 100);


console.log(codeSpentInSemester);

console.log(percentageOfWorkingHours);