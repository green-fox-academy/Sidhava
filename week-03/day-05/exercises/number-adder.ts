'use strict';


function countTo10(start: number, end: number) {
    console.log(start);
    if (start ===  end) {
        return;
    }
    countTo10(start + 1, end);
}

countTo10(0, 10);