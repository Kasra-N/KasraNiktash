onload = function() {
  var typed = new Typed(".type", {
    strings: [
      "System Design",
      "HTML/CSS",
      "Javascript",
      "C#",
      "SQL",
      "PHP",
      "Node.js",
      ".Net",
      "Android",
      "iOS",
      "Java",
      "Laravel",
      "Angular",
      "React",
      "Git",
      "Github"
    ],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true
  });

};

const navSlide = ()=>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
  })

  navLinks.forEach((link, index)=>{
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;


  })
}

navSlide();
