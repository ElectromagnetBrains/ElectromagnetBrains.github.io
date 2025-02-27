function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === 'pi') {
      display.value += Math.PI;
    } else {
      display.value += value;
    }
  }
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      let expression = display.value;
      expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
      expression = expression.replace(/sin\(/g, 'Math.sin(');
      expression = expression.replace(/cos\(/g, 'Math.cos(');
      expression = expression.replace(/tan\(/g, 'Math.tan(');
      expression = expression.replace(/log\(/g, 'Math.log10(');
      expression = expression.replace(/ln\(/g, 'Math.log(');
      expression = expression.replace(/\^/g, '**');
      expression = expression.replace(/!/g, factorial);
      display.value = eval(expression);
    } catch (error) {
      display.value = 'Error';
    }
  }
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }