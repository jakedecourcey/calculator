/*
* Implement all your JavaScript in this file!
*/

var display = '';
var operand1;
var operand2;
var lastButtonPress;
var operator = null;
var answer = null;

function reset(){
  display = "";
  operand1 = null;
  operand2 = null;
  lastButtonPress = null;
  operator = null;
  updateDisplay();
}  //complete

function updateDisplay() {
  $('#display').prop('value', display);
}//complete

function determineButtonType() {

  let value = $(this).val();
  let id = $(this).prop('id');

  if (value) {
    clickNumButton(value);
  }

  else {
    switch(id) {

      case 'addButton':
      add();
      break;

      case 'subtractButton':
      subtract();
      break;

      case 'multiplyButton':
      multiply();
      break;

      case 'divideButton':
      divide();
      break;

      case 'equalsButton':
      equals();
      break;

      case 'clearButton':
      clear();
      break;

    }
  }

  updateDisplay();
}//complete

function clickNumButton(value) {
  if (isNaN(lastButtonPress)) {
    display = '';
    updateDisplay();
  }
  display = display.concat(value);
  lastButtonPress = Number(value);
}//complete //complete

function add() {
  checkForOperator();
  setOperand1();
  operator = '+';
  lastButtonPress = '+';
} //complete //complete

function subtract() {
  checkForOperator();
  setOperand1();
  operator = '-';
  lastButtonPress = '-';
}//complete

function multiply() {
  checkForOperator();
  setOperand1();
  operator = '*';
  lastButtonPress = '*';
}//complete

function divide() {
  checkForOperator();
  setOperand1();
  operator = '/';
  lastButtonPress = '/';
}//complete

function equals() {
  if (lastButtonPress === '=') {
    setOperand1();
  }

  else {
    checkForOperator();
  }

  doMath();
   //complete
  lastButtonPress = '=';
} //complete

function clear() {
  reset();
} //complete //complete

function checkForOperator() {
  if (isNaN(lastButtonPress)) {
    operator = null; //complete
  }
  if (operator) {
  operand2 = Number(display);
  doMath();
  }
}//complete //complete//complete

function setOperand1() {//complete
  operand1 = Number(display);
}

function doMath () {

    if (operator) {
      switch (operator) {
        case '+':
        answer = operand1 + operand2;
        break;
        case '-':
        answer = operand1 - operand2;
        break;
        case '*':
        answer = operand1 * operand2;
        break;
        case '/':
        answer = operand1 / operand2;
        break;
      }

      display = answer;

    }

  } //complete

$(document).ready(reset())
var button = $('button');
button.click(determineButtonType)
