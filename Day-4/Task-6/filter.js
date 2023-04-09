 // Filter only prime number from a list of values

/*  function FilterArray(filter,array){
resultArray = []
for(let x of array){
if(filter(x))
resultArray.push(x);}
return resultArray;
}
let result = FilterArray(function(x){
for (let i = 2; i < x; i++) 
{
    if (x % i == 0) {
return false;
}
}
return true;
},[10, 12, 14, 15, 7, 4, 13]);
console.log(result); 
 */
// convert each string in the list into upper case

/* const strings = ["Welcome", "Home"];
const upper = strings.map((string) => string.toUpperCase());
console.log(upper);
 */

// get the length string in the list of the string
/* 
const names = ["Shyam", "R"];
var longest = names.reduce(
function (accumulator, currentvalue) {
return accumulator.length > currentvalue.length ? accumulator : currentvalue;
}
);
console.log(longest)


// get the sum of all the length of the string in the list

const strings = ["Shyam","R"];
const strlen = strings.map((string) => string.length);
sum = strlen.reduce((accumulator,currentvalue)=>accumulator+currentvalue)
console.log(sum);


// get the student with highest score

arry =[1,2,3,434,34,45]
high = arry.reduce((acc,val)=>acc>val? acc:val);
console.log(high);

//convert all the negative numbers in a list to positive numbers

const numbers = [-1,2,3,-4,-5,-6];
const upper = numbers.map((num) => num<0? num*-1:num);
console.log(upper);
 */

//7. filter only the students who got more than 70

let students = [{"Name": "Shyam","marks": [85]},{"Name": "Bhargav","marks": [90]}, {"Name": "James","marks": [60]}];
students.forEach(o => o.marks = o.marks.filter(v => v >= 90));
console.log(students);