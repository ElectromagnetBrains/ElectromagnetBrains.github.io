class Calculator {
  constructor() {
    this.input = "";
    this.result = "";
    this.operator = "";
  }

  appendValue(value) {
    this.input += value;
    document.getElementById("result").value = this.input;
  }

  clearResult() {
    this.input = "";
    this.result = "";
    this.operator = "";
    document.getElementById("result").value = "";
  }

  calculate() {
    try {
      const expression = this.input.replace(/[^\d+\-.*/\(\)\!\^%\s]/g, "");
      const result = Function('"use strict";return (' + expression + ")")();
      this.result = result;
      document.getElementById("result").value = this.result;
      this.input = "";
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }

  clearLastChar() {
    this.input = this.input.slice(0, -1);
    document.getElementById("result").value = this.input;
    if (this.input === "") {
      this.result = "";
    }
  }

  appendFunction(value) {
    this.input += "(" + value + ")";
    document.getElementById("result").value = this.input;
  }
}

const calculator = new Calculator();

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "Enter") {
    calculator.calculate();
  } else if (key === "Escape") {
    calculator.clearResult();
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    calculator.appendValue(key);
  } else if (key === ".") {
    calculator.appendValue(".");
  } else if (key === "Backspace") {
    calculator.clearLastChar();
  } else if (key >= "0" && key <= "9") {
    calculator.appendValue(key);
  } else if (key === "=") {
    calculator.calculate();
  } else if (key === "C") {
    calculator.clearResult();
  } else if (key === "(") {
    calculator.appendValue("(");
  } else if (key === ")") {
    calculator.appendValue(")");
  } else if (key === "s") {
    calculator.appendFunction("Math.sin");
  } else if (key === "h") {
    calculator.appendFunction("Math.cos");
  } else if (key === "t") {
    calculator.appendFunction("Math.tan");
  } else if (key === "^") {
    calculator.appendValue("Math.pow");
  } else if (key === "/") {
    calculator.appendValue("Math.sqrt");
  } else if (key === "%") {
    calculator.appendValue("Math.abs");
  } else if (key === "x") {
    calculator.appendValue("*");
  } else {
    // Ignore any other key press
  }
});
