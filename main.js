// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numToStr = () => {
  let input1 = document.getElementById('number').value;
  const num = parseInt(input1);
  const str = num.toString();
  document.getElementById('num-to-string').innerHTML = `${str} was successfully converted from a number to a string`
}

// Write a JavaScript program to convert a string to the number.
const strToNum = () => {
  let input2 = parseInt(document.getElementById('string').value);
  document.getElementById('string-to-num').innerHTML = `"${input2}" was successfully converted from a string to a number`
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  const getDataType = () => {
    let input3 = document.getElementById("data-types").value;
    let displayInput = document.getElementById("display-type");
    if(typeof input3 === 'boolean') {
      displayInput.innerHTML = 'boolean';
    } else if(typeof input3 === 'null') {
      displayInput.innerHTML = 'null';
    } else if(typeof input3 === 'undefined') {
      displayInput.innerHTML = 'undefined';
    } else if(typeof input3 === 'number') {
      displayInput.innerHTML = 'number';
    } else if(typeof input3 === 'NaN') {
      displayInput.innerHTML = 'NaN';
    } else if(typeof input3 === 'string') {
      displayInput.innerHTML = 'string';
    } else {
      displayInput.innerHTML = 'other';
    }
  }
  

  
// Write a JavaScript program that adds 2 numbers together.
const sumOfTwoNumbers = () => {
let num1 = parseInt(document.getElementById("first-number").value);
let num2 = parseInt(document.getElementById("second-number").value);
document.getElementById("sum").innerHTML = num1 + num2;
}

//another function with the same outcome
/*const sumOfTwoNumbers = (a,b) => {
  return a + b;
}
*/



// Write a JavaScript program that runs only when 2 things are true.
//-------------------------

const truthTeller = (a,b) => {
  if (a && b ){
  console.log('Both are true');
}
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const halfTruthTeller = (a,b) => {
  if(a === 5 || b === 4){
    console.log('One is true');
  }
}


// Write a JavaScript program that runs when both things are not true.  
const liar = (a,b) => {
  if (a !== 5) || (b !== 4){
    console.log('Both are false');
  }
}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
