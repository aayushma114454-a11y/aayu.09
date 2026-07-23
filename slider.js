const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

// Create dots

slide.forEach((item,index)=>{

const dot=document.createElement("span");

dot.classList.add("dot");

if(index===0){

dot.classList.add("active");

}

dot.addEventListener("click",()=>{

currentIndex=index;

updateSlider();

});

dotsContainer.appendChild(dot);

});

const dots=document.querySelectorAll(".dot");

function updateSlider(){

slides.style.transform=`translateX(-${currentIndex*100}%)`;

dots.forEach(dot=>{

dot.classList.remove("active");

});

dots[currentIndex].classList.add("active");

}

next.addEventListener("click",()=>{

currentIndex++;

if(currentIndex>=slide.length){

currentIndex=0;

}

updateSlider();

});

prev.addEventListener("click",()=>{

currentIndex--;

if(currentIndex<0){

currentIndex=slide.length-1;

}

updateSlider();

});

// Auto Slide every 4 seconds

setInterval(()=>{

currentIndex++;

if(currentIndex>=slide.length){

currentIndex=0;

}

updateSlider();

},4000);