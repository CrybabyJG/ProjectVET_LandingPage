/*Menu colapsado-responsive */
const menuBtn = document.querySelector(".menu-button")
const closeBtn = document.querySelector('.close-button')
const header = document.querySelector(".header")
const links = document.querySelectorAll(".nav-group a")

menuBtn.onclick = function(){
    header.classList.add('active')
}

closeBtn.onclick = function(){
    header.classList.remove('active')
}

links.forEach((link)=>{
    link.onclick = function(){
        header.classList.remove('active')
    }
})



//animacion de scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));



//animacion de scroll btn

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};