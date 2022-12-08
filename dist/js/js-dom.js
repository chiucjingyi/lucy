let student = document.querySelector('.student');
student.innerHTML='hellow world'
console.log(student);

let student1 = document.querySelectorAll('.student1');
console.log(student1);

let account = document.querySelector('.account')
console.log(account);

let content1 = document.querySelector('.content1') ;
content1.style.backgroundColor = 'rgb(250, 150, 19)';
content1.style.color = 'white';
content1.classList.add('super');
console.log(content1);

let contentlist = content1.className.split(' ');
console.log(contentlist);

let btn = document.querySelector('#btn');
console .log(btn);
let even ='click';
let fn = function(){
    console.log('click1111');
}
btn.addEventListener(even, fn) ;

