const menuBtn = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('a');
const body = document.querySelector('body');

const mode = document.querySelector(".setting");
const modeIcon = document.querySelector(".mode-icon");
const all = document.querySelector('*');
const col1 = document.querySelector('.col1');
const col2 = document.querySelector('.col2');
const burger = document.querySelector('.burger-line');
const burgerTop = document.querySelector('.burgerTop');
const burgerBottom = document.querySelector('.burgerBottom');
const logo =  document.querySelector('.img-logo');
const wordpress =  document.querySelector('.wordpress');
const orText = document.querySelector('.or-line-text');
const orLine = document.querySelector('.or-line');

const flipFront = document.querySelectorAll('.flip-card-front');
const flipBack = document.querySelectorAll('.flip-card-back');
const project = document.querySelectorAll('.project');

let menuOpen = false;
let isDark = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    // Show nav items when burger is clicked
    menuBtn.classList.add('open');
    menuOpen = true;
    nav.style.display = "flex";
    body.style.overflow = 'hidden';

    if(isDark){
      burger.style.background = 'rgba(0,0,0,0)';
    }
    else{
      burger.style.background = 'white';
    }
    
} else {
  // Hide nav items when burger is clicked
    menuBtn.classList.remove('open');
    menuOpen = false;
    nav.style.display = "none";
    burger.style.removeProperty('display');
    body.style.overflow = 'visible';

    if(isDark){
      burger.style.background = 'white';
    }
    else{
      burger.style.background = 'black';
    }
  }
});

// Auto hide nav links when clicked
for(let index =0; index < navItems.length; index++){
    navItems[index].addEventListener('click', () => {
        if(menuBtn.classList.contains('open')) {
            menuBtn.classList.remove('open');
            menuOpen = false;
            nav.style.display = "none";
            body.style.overflow = 'visible';
            
            if(isDark){
              burger.style.background = 'white';
            }
            else{
              burger.style.background = 'black';
            }
      }
      });
}

//for dark mode setting
modeIcon.addEventListener('click', () => {
  if(!isDark){
    //dark mode on
    isDark = true
    modeIcon.classList.add('fa-sun');
    modeIcon.classList.remove('fa-moon');
    body.style.color = "white";
    col2.style.background = "rgba(0,0,0,0.8)";
    col1.style.background = "rgba(0,0,0,0.89)";
    burgerTop.style.background = 'white';
    burgerBottom.style.background = 'white';
    logo.src="assets/logo/ian-logo-transparent-dark.png";
    wordpress.src="https://s.w.org/style/images/about/WordPress-logotype-alternative-white.png";
    orText.style.background ="rgb(0,0,0)";
    orLine.style.borderBottom ="1px solid white";
    

    if(menuOpen){
      burger.style.background = 'rgba(0,0,0,0)';
    }
    else{
      burger.style.background = 'black';
    }
    for(let index = 0; index < flipFront.length; index++){
      flipFront[index].style.background = 'hsla(0, 100%, 100%, 0.14)';
      flipBack[index].style.background = 'hsla(0, 100%, 100%, 0.14)';
    }
    for(let index = 0; index < project.length; index++){
      project[index].style.background = 'hsla(0, 100%, 100%, 0.14)';
    }
  }
  else{
    //dark mode off
    isDark = false;
    modeIcon.classList.add('fa-moon');
    modeIcon.classList.remove('fa-sun');
    body.style.color = "black";
    col2.style.background = "white";
    burgerTop.style.background = 'black';
    burgerBottom.style.background = 'black';
    col1.style.background = "white";
    logo.src="assets/logo/ian-logo-transparent.png";
    wordpress.src="https://s.w.org/style/images/about/WordPress-logotype-alternative.png";
    orText.style.background ="white";
    orLine.style.borderBottom ="1px solid black";

    
    if(menuOpen){
      burger.style.background = 'rgba(0,0,0,0)';
    }
    else{
      burger.style.background = 'white';
    }
  }
});