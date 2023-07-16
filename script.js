const nav = document.getElementById('nav-section');
const toggleIcon = document.getElementById('toggle-icon');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const textBox = document.getElementById('text-box');
const toggleSwitch = document.querySelector('input[type="checkbox"]')

function switchTheme(event){
   if(event.target.checked){
    document.documentElement.setAttribute('data-theme','dark');
    darkMode();
   } else{
    document.documentElement.setAttribute('data-theme','light');
    lightMode();
   }
}

// Dark style //

function darkMode(){
   nav.style.backgroundColor = 'rgb(0/0/0 50%)';
   textBox.style.backgroundColor = 'rgb(255/255/255 / 50%)';
   toggleIcon.children[0].textContent = "Dark Mode";
   toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
   img1.src = "hamburger-dark.svg";
   img2.src = "bbq-dark.svg";
   img3.src = "ice-cream-dark.svg";
}

function lightMode(){
   nav.style.backgroundColor = 'rgb(0/0/0 50%)';
   textBox.style.backgroundColor = 'rgb(255/255/255 / 50%)';
   toggleIcon.children[0].textContent = "Light Mode";
   toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
   img1.src = "hamburger-light.svg";
   img2.src = "bbq-light.svg";
   img3.src = "ice-cream-light.svg";
}



toggleSwitch.addEventListener('change',switchTheme);
