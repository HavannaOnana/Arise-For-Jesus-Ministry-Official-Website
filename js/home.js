const hamburger = document.querySelector(".hamburger-class");
let phoneLinks = document.querySelector(".phone-links");
let Body = document.querySelector(".first-part");

hamburger.addEventListener("click",function(){
    phoneLinks.classList.add("phone-links-add");
    phoneLinks.classList.add("swipe-in")
})

phoneLinks.addEventListener("mouseleave",function(){
    phoneLinks.classList.remove("phone-links-add")
})