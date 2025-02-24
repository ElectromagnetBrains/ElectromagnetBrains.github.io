function sidebar() {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.right = "0";
  let sideblur = document.getElementsByClassName("sideblur")[0];
  sideblur.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  sideblur.style.visibility = "visible";
  let sidebarButton = document.getElementsByClassName("sidebar-on-button")[0];
  sidebarButton.style.visibility = "hidden";
  let body = document.querySelector("body");
  body.style.overflow = "hidden";
}
function nosidebar() {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.right = "-25%";
  let sideblur = document.getElementsByClassName("sideblur")[0];
  sideblur.style.backgroundColor = "rgba(0, 0, 0, 0)";
  setTimeout(function () {
    sideblur.style.visibility = "hidden";
  }, 500);
  let sidebarButton = document.getElementsByClassName("sidebar-on-button")[0];
  sidebarButton.style.visibility = "visible";
  let body = document.querySelector("body");
  body.style.overflow = "scroll";
}
window.addEventListener("load", adjustHeroTextHeight);
window.addEventListener("resize", adjustHeroTextHeight);
function adjustHeroTextHeight() {
  const Hero = document.getElementsByClassName("hero")[0];
  const HeroText = document.getElementsByClassName("hero-text")[0];
  const HeroHeight = Hero.offsetHeight;
  HeroText.style.height = HeroHeight + "px";
}
setInterval(() => {
  AutoScrollQuote(quoteContainer, quoteContainerWidth);
}, 15000);
const quoteContainer = document.getElementsByClassName("quote-container")[0];
const quoteContainerWidth = Math.round(screen.width / 4);
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
