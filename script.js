let displayValue = '0';


const add = (x, y) => x + y; 

const subtract = (x, y) => x - y;

const multiply = (x, y) => x * y;

const divide = (x, y) => x / y;

const operate = (operator, x, y) => {

  if (operator === 'add'){
    return add(x,y);
  }
  else if(operator === 'subtract'){
    
    
    return subtract(x,y);
    
  }
  else if(operator === 'multiply'){
    return multiply(x,y);
  }
  else if(operator === 'divide'){
    if(x === 0 || y === 0){
      return("This calculator does not understand infinity")}; 
    return divide(x,y);

  }
}
const displayUpdate = (numberClick) => {
  
  if (displayValue == 0){
    displayValue = numberClick;
  }
  else{
    displayValue += numberClick;
  } 
  
  
  const updateBottom = document.getElementById("screen-bottom");
  const screenUpdate = document.createElement('p');
  const numberOnScreen = document.createTextNode(displayValue);

  if (updateBottom.hasChildNodes()){ // removes the old number for new number.
    updateBottom.removeChild(updateBottom.children[0]);
  }
  
  
  screenUpdate.appendChild(numberOnScreen);
  updateBottom.appendChild(screenUpdate);

  

  
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
