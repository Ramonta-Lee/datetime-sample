import dayjs from 'dayjs';
import moment from 'moment';

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(dayjs().format("dddd, MMMM D, YYYY h:mm A"));



// Try: moment.format("Tuesday")
moment().format();

// Nested within a function.
console.log(moment().format());

// You can hover over the format string.
moment().format("MMMM Do YYYY, h:mm:ss a");

// Try: now.format("January 2021")
let now = moment();
now.format("");

// Try: dayjs().format("Mon")
dayjs().format();
console.log(dayjs().format());

