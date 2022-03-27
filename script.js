
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


