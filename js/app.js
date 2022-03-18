window.onscroll = function() {myFunction()};

// Get the navbar
const navbar = document.getElementsByClassName('navbar');


// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}


// const navBtnDOM = document.querySelector('.nav-btn btn');

// navBtnDOM.addEventListener("click", function(){
//   console.log("hey im clicked");
//   links.classList.toggle('show-links');
// })

function ppi() {
  console.log("hello button is toggled");
  const links = document.querySelector('.nav-links');
  links.classList.toggle('show-links');
};

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
