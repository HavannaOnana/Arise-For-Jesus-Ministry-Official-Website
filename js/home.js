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


// animation for scroll animation when we scroll past an amount of window px

const ministries = document.querySelector(".photo-with-links");


window.addEventListener("scroll", function(){
    const scrollPosition = window.scrollY;
    var triggerOffset = 100;

    if(scrollPosition > triggerOffset){
        ministries.classList.add("fade-in")
    }
    else{
        ministries.classList.remove("fade-in")
    }
})