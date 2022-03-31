//Add a decimal point in the future and .. Probably refactor code once again :)
let storedOperator = '';
let displayValue = '';
let numberOne = 0;
let numberTwo = 0;
const numberedButtons = ['1', '2', '3', '4', 
'5', '6', '7', '8', '9', '0'];
const operators = ['/', '*', 
'-', '+', '='];

const add = (x, y)  => roundNumber(x + y) ; 
const subtract = (x , y) => roundNumber(x - y);
const multiply = (x , y) => roundNumber(x * y);
const divide = (x , y) => roundNumber(x / y);
  
  

function roundNumber(numb){
  numb = Math.round((numb + Number.EPSILON) * 100) / 100;     // This will come especially useful once adding decimal point to the calculator.
  return numb;

}

//Number presses stored in displayValue, 
const pressNumber = (event) =>{
  
  if (numberedButtons.includes(event.target.id)){
    displayValue += event.target.id;
    bottomScreenUpdate(displayValue);             // Populates bottom of calculator screen.
    
  }
}
const clearCalculator = (event) => {
  if (event.target.id === 'clear'){             // Resets everything on the calculator to default status
    storedOperator = '';
    displayValue = '';
    numberOne = 0;
    numberTwo = 0;
    bottomScreenUpdate(displayValue);
    topScreenUpdate('Calculate Me');
  }
}
const backSpace = (event) => {
  if (event.target.id === 'delete' && displayValue != ''){
    displayValue = displayValue.slice(0, -1);
    bottomScreenUpdate(displayValue);
  }
}


//checks to see  if an operator is pressed.

const pressOperator = (event) =>{
  
  if (operators.includes(event.target.id)){
    
    if (displayValue != '' && displayValue != '-' && numberOne === 0){  // first number
      numberOne = parseInt(displayValue);
      displayValue = '';
      if (event.target.id != '='){storedOperator = event.target.id;
      topScreenUpdate(numberOne)}
      else if(event.target.id === '='){   // display first number on top of calculator, 
          topScreenUpdate(numberOne);
          numberOne = 0;
          bottomScreenUpdate(displayValue);   //remove data from bottom of display.
      }
    }
    
    else if(displayValue ==='' || displayValue ==='-'){          //checks if operator being changed before second number input.
      if (numberOne === 0 && event.target.id === '-') { 
        displayValue = "-";}                                     // ---------
      else if(numberOne === 0 && event.target.id !='-'){      // Allows negative for first number.
        displayValue  = "";                                     // ---------
      }                
      if (event.target.id != '='){storedOperator = event.target.id;}   
      topScreenUpdate(numberOne);
      
    }
    else if (displayValue != ''){                   // when a new operator is pressed after numbertwo is being written,
      numberTwo = parseInt(displayValue);           // does the previous operators equation
      displayValue = '';
      if(storedOperator === '+'){ // calls for addition               ALTERS numberONE TO SUM --------->
        numberOne = add(numberOne,numberTwo);
        storedOperator = event.target.id;
      }
      else if(storedOperator ==='-'){ //calls for subtraction
        numberOne = subtract(numberOne,numberTwo);
        storedOperator = event.target.id;
      }
      else if(storedOperator === '*'){ //calls for multiplication
        numberOne = multiply(numberOne, numberTwo)
        storedOperator = event.target.id;
      }
      else if(storedOperator === '/'){ // calls for division                <-------------
        if(numberOne == 0 || numberTwo == 0){
          numberOne = 'You Cannot Divide By Zero It Scares Me';
        }
        else{
        numberOne = divide(numberOne, numberTwo);
        storedOperator = event.target.id;  }
    }
      if(event.target.id === '='){              
        storedOperator = '';
        topScreenUpdate(numberOne);
        displayValue = '';
        bottomScreenUpdate(displayValue);
        numberOne = 0;
        numberTwo = 0;
      }
      else{
      topScreenUpdate(numberOne);
      displayValue  = "";  
      bottomScreenUpdate(displayValue);  
    }}
  }
}
const bottomScreenUpdate = (numberClicked) =>  { // updates the bottom screen based on buttons pressed.
  const bottomElement = document.getElementById("screen-bottom");
  const createPara = document.createElement('p');
  let numberEntered = document.createTextNode(numberClicked) 
  if (bottomElement.hasChildNodes()){
    bottomElement.removeChild(bottomElement.children[0]);
  }
  createPara.appendChild(numberEntered);
  bottomElement.appendChild(createPara);
}
const topScreenUpdate = (numberSent) => {
  const topElement = document.getElementById("screen-top");
  const createPara = document.createElement('p');
  let numberEntered = document.createTextNode(numberSent + ' ' + storedOperator);
  if (topElement.hasChildNodes()){
    topElement.removeChild(topElement.children[0]);
  }
  createPara.appendChild(numberEntered);
  topElement.appendChild(createPara);
}
window.addEventListener('click', pressNumber);
window.addEventListener('click', pressOperator);
window.addEventListener('click', clearCalculator);
window.addEventListener('click', backSpace);


