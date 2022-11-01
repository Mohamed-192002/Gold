/* start header  */
const menu = document.querySelector(".links-container i");
const menuUl = document.querySelector(".header-area .links-container ul");
const menuArrow = document.querySelector(".header-area i");
const allLinks = document.querySelectorAll(".links a");
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
menu.addEventListener("click", () => {
  menuUl.classList.toggle("open");
  menuArrow.classList.toggle("menu-active");
});
menuUl.onclick = function (e) {
  e.stopPropagation();
};
document.addEventListener("click", (e) => {
  if (e.target !== menu && e.target !== menuUl) {
    if (menuUl.classList.contains("open")) {
      menuUl.classList.toggle("open");
      menuArrow.classList.toggle("menu-active");
    }
  }
});
// Scroll into some section
const scrollToSomeSection = (element) => {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector(e.target.dataset.section)
        .scrollIntoView({ behavior: "smooth" });
    });
  });
};
scrollToSomeSection(allLinks);
scrollToSomeSection(allBullets);
/* end header  */
// start home
const sliderLi = document.querySelectorAll(".slider-controls li ");
sliderLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((x) => {
      x.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// End home
// scroll Dimension for element
const scrollDimension = (element) => {
  let skillsOffsetTop = element.offsetTop;
  let skillsOuterHeight = element.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;
  let x = skillsOffsetTop + skillsOuterHeight - windowHeight;
  if (windowScrollTop > x) {
    return true;
  }
};
// Start Go Up Button
const buttonUp = document.querySelector(".up");
buttonUp.addEventListener("click", (e) => {
  document.querySelector(".header-area").scrollIntoView({ behavior: "smooth" });
});
let landingPage = document.querySelector(".Shop");
window.addEventListener("scroll", function () {
  if (scrollDimension(landingPage)) {
    document.querySelector(".up").style.display = "block";
  } else {
    document.querySelector(".up").style.display = "none";
  }
});
// End Go Up Button
