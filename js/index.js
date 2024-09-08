const loadingLine = document.querySelector(".progress");
let width = 0;

const interval = setInterval(function(){
    width+=5;
    loadingLine.style.width = `${width}%`;

    if(width >=100){
        clearInterval(interval);
        window.location.href="/html/home.html"
    }
},800)

//randomly showing bible verses
let verses = [
    "I sought the LORD, and He answered me and delivered me from all my fears. Those who look to Him are radiant, and their faces shall never be ashamed. Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in Him! - Psalm 34:4-5,8",
    "And we know that for those who love God all things work together for good, for those who are called according to His purpose. - Romans 8:28",
    "In the world you will have tribulation. But take heart; I have overcome the world - John 16:33",
    "For I, the LORD your God, hold your right hand; it is I who say to you, 'Fear not, I am the one who helps you - Isaiah 41:13",
    "When I thought,  Your steadfast love, O LORD, helped me up. When the cares of my heart are many, Your consolations cheer my soul - Psalm 94:18–19"
];

let bibleVerse = document.querySelector(".bible-verse");

let index = 0;



function showNextVerse(){
    setTimeout(function(){
        bibleVerse.classList.remove("fade-in")
    },1800)
    bibleVerse.textContent = verses[index];
    bibleVerse.classList.add("fade-in");
    index = (index + 1) % verses.length; // looping through each bible verse
}

//showing the bible verse
showNextVerse();

setInterval(showNextVerse,2000);
