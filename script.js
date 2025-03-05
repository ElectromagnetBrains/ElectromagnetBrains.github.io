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

// Calculator functionality
class Calculator {
  constructor() {
    this.input = "";
    this.result = "";
  }

  appendValue(value) {
    this.input += value;
    document.getElementById("calculator-display").innerText = this.input;
  }

  clearResult() {
    this.input = "";
    this.result = "";
    document.getElementById("calculator-display").innerText = "0";
  }

  clearLastChar() {
    this.input = this.input.slice(0, -1);
    document.getElementById("calculator-display").innerText = this.input || "0";
  }

  calculate() {
    try {
      this.result = eval(this.input);
      document.getElementById("calculator-display").innerText = this.result;
      this.input = this.result.toString();
    } catch (error) {
      document.getElementById("calculator-display").innerText = "Error";
    }
  }

  appendFunction(value) {
    if (value === "sin" || value === "cos" || value === "tan") {
      this.input += `Math.${value}(Math.PI/180*`;
    } else if (value === "sqrt") {
      this.input += "Math.sqrt(";
    } else if (value === "abs") {
      this.input += "Math.abs(";
    } else if (value === "exp") {
      this.input += "Math.exp(";
    } else if (value === "ln") {
      this.input += "Math.log(";
    } else if (value === "log") {
      this.input += "Math.log10(";
    } else if (value === "round") {
      this.input += "Math.round(";
    } else if (value === "min") {
      this.input += "Math.min(";
    } else if (value === "max") {
      this.input += "Math.max(";
    } else if (value === "avg") {
      this.input += "Math.average(";
    } else if (value === "square") {
      this.input += "**2";
    } else if (value === "cube") {
      this.input += "**3";
    }
    document.getElementById("calculator-display").innerText = this.input;
  }

  appendConstant(value) {
    if (value === "π") {
      this.input += "Math.PI";
    } else if (value === "e") {
      this.input += "Math.E";
    }
    document.getElementById("calculator-display").innerText = this.input;
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
      value === "sin" ||
      value === "cos" ||
      value === "tan" ||
      value === "log" ||
      value === "sqrt" ||
      value === "pow" ||
      value === "abs" ||
      value === "exp" ||
      value === "ln" ||
      value === "floor" ||
      value === "ceil" ||
      value === "round" ||
      value === "min" ||
      value === "max" ||
      value === "avg" ||
      value === "square" ||
      value === "cube"
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
  console.log(event.key);
  event.preventDefault();
  const key = event.key;
  if (key === "Enter") {
    calculator.calculate();
  } else if (key === "Escape") {
    calculator.clearResult();
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    calculator.appendValue(key);
  } else if (key === ".") {
    calculator.appendValue(".");
  } else if (key === "Backspace" || key === "⌫") {
    calculator.clearLastChar();
  } else if (key >= "0" && key <= "9") {
    calculator.appendValue(key);
  } else if (key === "=") {
    calculator.calculate();
  } else if (key === "C" || key === "c") {
    calculator.clearResult();
  } else if (key === "(" || key === ")") {
    calculator.appendValue(key);
  } else if (key === "s") {
    calculator.appendFunction("sin");
  } else if (key === "h") {
    calculator.appendFunction("cos");
  } else if (key === "t") {
    calculator.appendFunction("tan");
  } else if (key === "/") {
    calculator.appendFunction("sqrt");
  } else if (key === "|") {
    calculator.appendFunction("abs");
  } else if (key === "x") {
    calculator.appendValue("*");
  } else if (key === "p") {
    calculator.appendConstant("π");
  } else if (key === "e") {
    calculator.appendConstant("e");
  } else if (key === "E") {
    calculator.appendFunction("exp");
  } else if (key === "a") {
    calculator.appendFunction("avg");
  } else if (key === "r") {
    calculator.appendFunction("round");
  } else if (key === "m") {
    calculator.appendFunction("min");
  } else if (key === "M") {
    calculator.appendFunction("max");
  } else if (key === "v") {
    calculator.appendFunction("avg");
  } else if (key === "@") {
    calculator.appendFunction("square");
  } else if (key === "#") {
    calculator.appendFunction("cube");
  }
});
