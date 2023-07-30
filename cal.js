function Solve(val) {
    let v = document.getElementById('res');
    v.value += val;
 }
 function Result() {
    let num1 = document.getElementById('res').value;
    let num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
 function Clear() {
    let inp = document.getElementById('res');
    inp.value = '';
 }
 function Back() {
    let ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }
 
 function Factorial() {
    let num = parseInt(document.getElementById('res').value);
    if (isNaN(num)) {
      document.getElementById('res').value = 'Invalid input';
      return;
    }
  
    if (num < 0) {
      document.getElementById('res').value = 'Factorial is not defined for negative numbers';
      return;
    }
  
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
  
    document.getElementById('res').value = result;
  }
  function SquareRoot() {
    let num = parseFloat(document.getElementById('res').value);
    if (isNaN(num)) {
      document.getElementById('res').value = 'Invalid input';
      return;
    }
  
    if (num < 0) {
      document.getElementById('res').value = 'Square root is not defined for negative numbers.';
      return;
    }
  
    let sqrt1 = Math.sqrt(num);
    document.getElementById('res').value = sqrt1;
  }
  // function Power(){
  //   let p = parseFloat(document.getElementById('res').value);
  //   let q = parseFloat(document.getElementById('exponent').value);
    
  
  //     let num3=Math.pow(p,q);
  //     document.getElementById('res').value = num3;
  //   }
  let powerBase=0;
  function showExponentInput() {
    powerBase = parseFloat(document.getElementById('res').value);
    document.getElementById('exponent').value = '';
    document.getElementById('exponent').style.display = 'inline-block';
    document.getElementById('calculate-power').style.display = 'inline-block';
    document.getElementById('cancel-power').style.display = 'inline-block';
  }

  function calculatePower() {
    let exponent = parseFloat(document.getElementById('exponent').value);
    if (!isNaN(exponent)) {
      let result = Math.pow(powerBase, exponent);
      document.getElementById('res').value = result;
      hideExponentInput();
    }
  }

  function hideExponentInput() {
    document.getElementById('exponent').style.display = 'none';
    document.getElementById('calculate-power').style.display = 'none';
    document.getElementById('cancel-power').style.display = 'none';
  }
  
  
  
  
  
