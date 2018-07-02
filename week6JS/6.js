// 0
function doIt() {
    console.log('I am done');
  }
  setTimeout(doIt, 5000);
  
  // 1
  function foo(func) {
    // What to do here? 
    func();
  }
  function bar() {
    console.log('Hello, I am bar!');
  }
  foo(bar);
  
  // 2
  function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array
    let arr = [];
    // 3
    for (let i = startIndex; i <= stopIndex; i++) {
      arr.push(i);
    }
    arr.forEach(num => {
      if (num % 3 === 0) {
        threeCallback(num);
      }
      if (num % 5 === 0) {
        fiveCallback(num);
      }
    })
  }
  // Closure
  function say(divisitor) {
    return function(num) {
      console.log(`${num} is divisible by ${divisitor}`);
    }
  }
  
  threeFive(10, 15, say(3), say(5));
  
  // 3
  // WHILE loop
  function repeatStringNumTimes(str, num) {
    let emptySrting = '';
      while (num > 0) {
        emptySrting += str;
        num--;
      }   
    return console.log(emptySrting);
  }
  repeatStringNumTimes("abc", 3);
  
  // FOR loop
  function repeatStringNumTimes(str, num) {
    let emptySrting = '';
      for (let i = 0; i < num; i++) {
        emptySrting += str;
      }   
    return console.log(emptySrting);
  }
  repeatStringNumTimes("abc", 2);
  
  // DO WHILE loop
  function repeatStringNumTimes(str, num) {
    let emptySrting = '';
      do {
        emptySrting += str;
        num--;
      }
      while (num > 0);
    return console.log(emptySrting);
  }
  repeatStringNumTimes("abc", 1);
  
  // 6
  let arr3d = [[[1, 'a'], [2, 'b'], [3, 'c']]];
  function print3dArr(arg) {
    if(Array.isArray(arg)) {
      arg.forEach(element => print3dArr(element));
    } else {
      console.log(arg);
    }
  }
  print3dArr(arr3d);
  
  // 7
  let x = 9;
  function f1(val) { 
    val = val + 1; 
    return val;
  }
  f1(x);
  console.log(x); 
  
  
  let y = {x: 9};
  function f2(val) {
    val.x = val.x + 1;
    return val;
  }
  f2(y);
  console.log(y); 
  
  // 8
  function createBase(num1) {
    return function(num2) {
      return num1 + num2;
    }
  }
  let addSix = createBase(6);
  console.log(addSix(10));
  console.log(addSix(21));
  
  // 9
  let arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
  let newArr = arr.filter((elem, index) => { return  arr.indexOf(elem) === index });
  newArr.forEach(elem => console.log(elem));