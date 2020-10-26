// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************



// Write a JavaScript program to display the current day and time, start with:
// console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  output('#display-element', currentDate)
}
 

// Write a JavaScript program to convert a number to a string.

const numToString = () => {
  let num = document.querySelector('#numEntered').value;
  let stringNum = num.toString();

  if (num === '') {
    alert('Please enter a number')
  } else {
  document.querySelector('#display-string').innerHTML = stringNum + ' is now a ' + typeof stringNum;
  }
}


// Write a JavaScript program to convert a string to the number.
const stringToNum = () => {
  const string = document.querySelector('#stringEntered').value;
  let numString = parseInt(string);

  if (string === '') {
    alert('Please enter a number')
  } else {
    document.querySelector('#display-num').innerHTML = numString + ' is now a ' + typeof numString;
  }  
}




// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

const output = (id, type) => document.querySelector(id).innerHTML = type;


const whatType = () => {
  let input = document.querySelector('#somethingEntered').value.toLowerCase();

  if (input == '') {
    output('#displayType', 'Undefined');
  } else if (input === 'true' || input === 'false') {
    console.log(input)
    output('#displayType', 'Boolean')
  } else if (input == 'null') {
    output('#displayType', 'Null')
  } else if (input <= Number.MAX_VALUE) {
    output('#displayType', 'Number')
  } else if (typeof input === 'string') {
    output('#displayType', 'String')
  } else {
    output('#displayType', 'NaN')
  }
}  

  
// Write a JavaScript program that adds 2 numbers together.

const addTwoNums = (a,b) => a + b

const addTheseNums = () => {
  let num1 = parseInt(document.querySelector('#num1').value);
  let num2 = parseInt(document.querySelector('#num2').value);
  let sum = addTwoNums(num1, num2);
  if (num1 === '' || num2 === '') {
    alert('Please enter two numbers')
  } else {
  output('#displaySum', sum)
  }
}

// Write a JavaScript program that runs only when 2 things are true.


const calculateCuteness = () => {
  const animal = document.querySelectorAll('input[name="animal"]');
  let selectedAnimal;
  const cute = document.querySelectorAll('input[name="cuteNotCute"]');
  let selectedCuteness;

  // Write a JavaScript program that runs when 1 of 2 things are true.
  
  for (const rb of animal) {
    if (rb.checked) {
        selectedAnimal = rb.value;
    }
  }

  for (const rb of cute) {
    if (rb.checked) {
        selectedCuteness = rb.value;
    }
  }

  // Write a JavaScript program that runs only when 2 things are true.

  if (selectedAnimal === 'dog' && selectedCuteness === 'cute') {
    output('#displayCuteness', 'Dog is very cute')
  }
  // Write a JavaScript program that runs when 1 of 2 things are true.
  else if (selectedAnimal === 'dog' || selectedCuteness === 'cute') {
    output('#displayCuteness', 'Dog is still cute')
  }
// Write a JavaScript program that runs when both things are not true.
  else if (selectedAnimal !== 'dog' && selectedCuteness !== cute) {
    output('#displayCuteness', 'Dogs are cute')
  } else {
    output('#displayCuteness', 'All dogs are cute')
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const cuteAnimal = () => {
  if (animal === cuteDog || animal === cuteCat) {
    return 'animal is cute'
  }
}

// Write a JavaScript program that runs when both things are not true.

const notCuteAnimal = () => {
  if (animal !== cuteDog && animal !== cuteCat) {
    return 'animal not is cute'
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the 'Go Live' button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
