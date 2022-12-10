let test1 = document .querySelector('#click');
let res = document .querySelector('#response');
let na = document .querySelector('#na');
console. log(test1);
console. log(res);
console. log(na);

test1 .addEventListener ('click', function(){
    response .innerHTML = 'hi, ' + na .value;

    }
)



let ma1 = document .querySelector('#plus1');
let ma2 = document .querySelector('#plus2');
let operation = document .querySelector('#operation');
let res1 = document .querySelector('#response1');

console.log(ma1);
console.log(ma2);
console.log(operation);
console.log(response1);


operation .addEventListener ('click', function(){
    let n1= plus1.value;
    let n2= plus2.value;
    let n3= parseInt(n1 ,10) + parseInt(n2 ,10);
    response1 .innerHTML = `${n1} + ${n2} = ${n3}`;
    // `位於esc下方那鍵


    }
)