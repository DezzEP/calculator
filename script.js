let displayValue = '0';
let displayValueOperator = '';
let allowOperand = true;
let allowEquals = true;
let x = 0; 






const add = (x, y) => x + y; 
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const operate = (operator, x, y) => {
  x = parseInt(x);
  y = parseInt(y);
  if (operator === ' + '){
    return add(x,y);
  }
  else if(operator === ' - '){
    
    
    return subtract(x,y);
    
  }
  else if(operator === ' * '){
    return multiply(x,y);
  }
  else if(operator === ' / '){
    if(x === 0 || y === 0){
      return(": -------------This calculator does not understand infinity")}; 
    return divide(x,y);

  }
}
const displayUpdate = (numberClick) => {
  //checks to see if operator was selected
  if(numberClick === ' + ' || numberClick === ' - ' || 
    numberClick === ' / ' || numberClick === ' * '){
    topScreenUpdate(numberClick)

  }
  //stops calculator from display 0000000 if constantly selected.
  else if (displayValue == 0){ 
    bottomScreenUpdate(displayValue = numberClick);
  }
  
  else{
    bottomScreenUpdate(displayValue += numberClick);
  } 

  
function bottomScreenUpdate(valueButtonClick){
  allowEquals = true;
  const updateBottom = document.getElementById("screen-bottom");
  const screenUpdate = document.createElement('p');
  const numberOnScreen = document.createTextNode(valueButtonClick);

  if (updateBottom.hasChildNodes()){ // removes the old number for new number.
    updateBottom.removeChild(updateBottom.children[0]);
  }
  
  
  screenUpdate.appendChild(numberOnScreen);
  updateBottom.appendChild(screenUpdate);
}
}

function topScreenUpdate(valueButtonClick){
  
  
  const updateTop = document.getElementById("screen-top");
  const screenUpdate = document.createElement('p');
  displayValueOperator = valueButtonClick;
  const numberOnScreen = document.createTextNode(displayValue + displayValueOperator);
  
  
  
  if (updateTop.hasChildNodes()){
    updateTop.removeChild(updateTop.children[0]);
  }
  screenUpdate.appendChild(numberOnScreen);
  updateTop.appendChild(screenUpdate);
}

document.getElementById('1').onclick = function(){
  displayUpdate('1')
}
document.getElementById('2').onclick = function(){
  displayUpdate('2')
}
document.getElementById('3').onclick = function(){
  displayUpdate('3')
}
document.getElementById('4').onclick = function(){
  displayUpdate('4')
}
document.getElementById('5').onclick = function(){
  displayUpdate('5')
}
document.getElementById('6').onclick = function(){
  displayUpdate('6')
}
document.getElementById('7').onclick = function(){
  displayUpdate('7')
}
document.getElementById('8').onclick = function(){
  displayUpdate('8')
}
document.getElementById('9').onclick = function(){
  displayUpdate('9');
}
document.getElementById('0').onclick = function(){
  displayUpdate('0');
  
}
document.getElementById('clear').onclick = function(){
  
  
  displayValue = '';
  displayValueOperator = '';
  x = 0; 
  displayUpdate('0');
  allowOperand = true;
  allowEquals = true;
  topScreenUpdate('');
  
  


}
//checks to see if operand has been used yet
function checkDisplayValue (value){ 
  if (!displayValueOperator){
     x = displayValue;
    displayUpdate(value)
    displayValue = 0;
    }
  
}
document.getElementById('add').onclick = function(){
  checkDisplayValue(' + ')
    }

document.getElementById('subtract').onclick = function(){
  checkDisplayValue(' - ')
}
document.getElementById('multiply').onclick = function(){
  checkDisplayValue(' * ')
}
document.getElementById('divide').onclick = function(){
  checkDisplayValue(' / ')
}

document.getElementById('equals').onclick = function(){
  if (allowEquals){
    if(!displayValueOperator){
      topScreenUpdate('');
      
      x = 0;
      displayValue = 0;
      displayUpdate('0');
      
    }
    else{
  let equalTo = operate(displayValueOperator, displayValue, x);
  displayValue = 0;
  x = 0;
  topScreenUpdate(equalTo);
  displayUpdate('0');
  
  displayValueOperator = '';
  allowEquals = false;
  
}}}
  
  


