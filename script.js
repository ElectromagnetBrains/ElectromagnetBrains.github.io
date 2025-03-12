function sidebar() {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.right = "0";
  let sideblur = document.getElementsByClassName("sideblur")[0];
  sideblur.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  sideblur.style.visibility = "visible";
  let sidebarButton = document.getElementsByClassName("sidebar-on-button")[0];
  sidebarButton.style.visibility = "hidden";
  let body = document.querySelector("body");
  body.style.overflow = "hidden";
}
function nosidebar() {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.right = "-40%";
  let sideblur = document.getElementsByClassName("sideblur")[0];
  sideblur.style.backgroundColor = "rgba(255, 255, 255, 0)";
  setTimeout(function () {
    sideblur.style.visibility = "hidden";
  }, 500);
  let sidebarButton = document.getElementsByClassName("sidebar-on-button")[0];
  sidebarButton.style.visibility = "visible";
  let body = document.querySelector("body");
  body.style.overflow = "scroll";
}

function adjustHeroTextHeight() {
  const heroes = document.getElementsByClassName("hero");
  let Hero = [...heroes].find((img) => img.offsetParent !== null) || heroes[0];
  const HeroText = document.getElementsByClassName("hero-text")[0];
  const HeroHeight = Hero.offsetHeight;
  HeroText.style.height = HeroHeight + "px";
}
window.addEventListener("load", adjustHeroTextHeight);
window.addEventListener("resize", adjustHeroTextHeight);

setInterval(() => {
  AutoScrollQuote(quoteContainer, quoteContainerWidth);
}, 15000);
const quoteContainer = document.getElementsByClassName("quote-container")[0];
const quoteContainerWidth = Math.round(screen.width / 6);
function previousQuote(quoteContainer, quoteContainerWidth) {
  quoteContainer.scrollBy({ left: -quoteContainerWidth, behavior: "smooth" });
}
function nextQuote(quoteContainer, quoteContainerWidth) {
  quoteContainer.scrollBy({ left: quoteContainerWidth, behavior: "smooth" });
}
function autoScrollQuote(quoteContainer, quoteContainerWidth) {
  const maxScrollLeft = quoteContainer.scrollWidth - quoteContainer.clientWidth;
  const currentScrollLeft = quoteContainer.scrollLeft;

  if (currentScrollLeft < maxScrollLeft) {
    quoteContainer.scrollBy({ left: quoteContainerWidth, behavior: "smooth" });
  } else {
    quoteContainer.scrollLeft = 0;
  }
}
function AutoScrollQuote(quoteContainer, quoteContainerWidth) {
  if (quoteContainer) {
    autoScrollQuote(quoteContainer, quoteContainerWidth);
  }
}
class Calculator {
  constructor() {
    this.input = "";
    this.result = "";
  }

  appendValue(value) {
    this.input += value;
    this.updateDisplay();
  }

  clearResult() {
    this.input = "";
    this.result = "";
    this.updateDisplay(true);
  }

  clearLastChar() {
    this.input = this.input.slice(0, -1);
    this.updateDisplay();
  }

  calculate() {
    try {
      this.result = eval(this.input);
      this.updateDisplay();
      this.input = this.result.toString();
    } catch (error) {
      document.getElementById("calculator-display").innerText = "Error";
    }
  }

  appendConstant(value) {
    if (value === "π") {
      this.input += "Math.PI";
    } else if (value === "e") {
      this.input += "Math.E";
    }
    this.updateDisplay();
  }

  appendFunction(value) {
    if (value === "sin" || value === "cos" || value === "tan") {
      this.input += `Math.${value}(Math.PI/180*`;
    } else if (value === "sqrt") {
      this.input += "Math.sqrt(";
    } else if (value === "exp") {
      this.input += "Math.exp(";
    } else if (value === "log") {
      this.input += "Math.log10(";
    } else if (value === "ln") {
      this.input += "Math.log(";
    } else if (value === "round") {
      this.input += "Math.round(";
    } else if (value === "abs") {
      this.input += "Math.abs(";
    } else if (value === "min") {
      this.input += "Math.min(";
    } else if (value === "max") {
      this.input += "Math.max(";
    } else if (value === "square") {
      this.input += "**2";
    } else if (value === "cube") {
      this.input += "**3";
    }
    this.input += ")";
    this.updateDisplay();
    this.moveCursorInsideBrackets();
  }

  moveCursorInsideBrackets() {
    const display = document.getElementById("calculator-display");
    const inputLength = this.input.length;
    const lastChar = this.input[inputLength - 1];
    if (lastChar === ")") {
      this.input = this.input.slice(0, -1) + "0";
      this.input();
      this.updateDisplay();
      display.scrollLeft = display.scrollWidth;
    }
  }

  updateDisplay(clear = false) {
    const display = document.getElementById("calculator-display");
    display.innerText = clear ? "0" : this.input;
    display.scrollLeft = display.scrollWidth;
  }
}

const calculator = new Calculator();
document.querySelectorAll(".calculator button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    if (value === "C") {
      calculator.clearResult();
    } else if (value === "⌫") {
      calculator.clearLastChar();
    } else if (value === "=") {
      calculator.calculate();
    } else if (
      value === "square" ||
      value === "cube" ||
      value === "sin" ||
      value === "cos" ||
      value === "tan" ||
      value === "sqrt" ||
      value === "exp" ||
      value === "log" ||
      value === "ln" ||
      value === "round" ||
      value === "abs" ||
      value === "min" ||
      value === "max"
    ) {
      calculator.appendFunction(value);
    } else if (value === "π" || value === "e") {
      calculator.appendConstant(value);
    } else {
      calculator.appendValue(value);
    }
  });
});
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  const key = event.key;
  if (key >= "0" && key <= "9") {
    calculator.appendValue(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    calculator.appendValue(key);
  } else if (key === ".") {
    calculator.appendValue(".");
  } else if (key === ",") {
    calculator.appendValue(",");
  } else if (key === "(" || key === ")") {
    calculator.appendValue(key);
  } else if (key === "Backspace") {
    calculator.clearLastChar();
  } else if (key === "Escape") {
    calculator.clearResult();
  } else if (key === "Enter") {
    calculator.calculate();
  } else if (key === "@") {
    calculator.appendFunction("square");
  } else if (key === "#") {
    calculator.appendFunction("cube");
  } else if (key === "p") {
    calculator.appendConstant("π");
  } else if (key === "e") {
    calculator.appendConstant("e");
  } else if (key === "s") {
    calculator.appendFunction("sin");
  } else if (key === "o") {
    calculator.appendFunction("cos");
  } else if (key === "t") {
    calculator.appendFunction("tan");
  } else if (key === "q") {
    calculator.appendFunction("sqrt");
  } else if (key === "E") {
    calculator.appendFunction("exp");
  } else if (key === "l") {
    calculator.appendFunction("log");
  } else if (key === "n") {
    calculator.appendFunction("ln");
  } else if (key === "r") {
    calculator.appendFunction("round");
  } else if (key === "|") {
    calculator.appendFunction("abs");
  } else if (key === "m") {
    calculator.appendFunction("min");
  } else if (key === "M") {
    calculator.appendFunction("max");
  }
});
