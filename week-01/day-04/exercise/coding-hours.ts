// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
let semesterInWeeks: number = 17;
let attendeeCodesDaily: number = 6;
let weekDays = 5;
let addendeeCodesWeekly: number = attendeeCodesDaily * weekDays;
let codeSpentInSemester: number = addendeeCodesWeekly * semesterInWeeks;

let workHoursWeekly: number = 52;
let workHoursInSemester: number = workHoursWeekly * semesterInWeeks;
let percentageOfWorkingHours: number = codeSpentInSemester / (workHoursInSemester / 100);

// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
console.log(codeSpentInSemester);
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
console.log(percentageOfWorkingHours);