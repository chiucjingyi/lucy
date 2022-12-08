alert('hi');

let n1 = 1;
let n2 = 1.25;
let n3 = '10';
let n4 = n1 + n2;
let n5 = n1 + n3;
let n6 = parseInt(n3, 10) + n1


console.log(n4);
console.log(n5);
console.log(n6);

let a2 = [1, 2, 3, 4]; 
console.log (a2[0]);
console.log ( a2.join('-'));


let index= a2. indexOf(2);
console.log (index);

a2.splice(index, 1);
console.log(a2);