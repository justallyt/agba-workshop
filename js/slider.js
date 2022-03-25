const slides = document.querySelectorAll(".slide-moja")
let current = 0;
const heading = document.querySelectorAll(".landing-texts h1");
const subheader = document.querySelectorAll(".landing-texts h5")
const paragraph = document.querySelectorAll(".landing-texts p")
const btn_explore = document.querySelectorAll(".btn-explore a")

let showSlide = ()=>{
    for(let i = 0; i < slides.length; i++){
          slides[i].style.display =  "none";
    }
    
    current++;
    if(current > slides.length){
          current = 1;
    }
    
    slides[current-1].style.display = "flex";

    setTimeout(()=>{
        showSlide()
        heading.forEach(element => {
               element.classList.add("slide-up-animation")
        })
        subheader.forEach(element => {
            element.classList.add("slide-up-animation")
       })
        paragraph.forEach(element => {
             element.classList.add("slide-down-animation")
        })
        btn_explore.forEach(element =>{
             element.classList.add("slide-up-animation")
        })
        setTimeout(()=>{
            heading.forEach(element => {
                element.classList.remove("slide-up-animation")
                element.classList.add("invert-slide-up-animation")
            })
            subheader.forEach(element => {
                element.classList.remove("slide-up-animation")
                element.classList.add("invert-slide-up-animation")
            })
            paragraph.forEach(element => {
                element.classList.remove("slide-down-animation")
                element.classList.add("invert-slide-down-animation")
           })
           btn_explore.forEach(element =>{
                element.classList.remove("slide-up-animation")
                element.classList.add("invert-slide-up-animation")
           })
        }, 7000)
        setTimeout(()=>{
            heading.forEach(element => {
                element.classList.remove("invert-slide-up-animation")
            })
            subheader.forEach(element => {
                element.classList.remove("invert-slide-up-animation")
            })
            paragraph.forEach(element => {
                 element.classList.remove("invert-slide-down-animation")
            })
            btn_explore.forEach(element =>{
                element.classList.remove("invert-slide-up-animation")
           })
        }, 8000)
    },8000);
}
showSlide();


//testimonial slider
let testimonial_slider = ()=>{
     let slide_list = document.querySelector(".slide-box");
     let count = 0;
     let slide_items = document.querySelectorAll(".slide-box .testimonial-box").length;
    
     let nextSlide = ()=>{
         count  = (count + 1) % slide_items;
         slide_list.style.marginLeft = -1 * count * 100 + "%";
     }
 

    setInterval(()=>{
        nextSlide()
    }, 5000)
}

window.onload = ()=>{
    testimonial_slider();
}

$(document).ready(function(){
     $(".partners-content").slick({
         slidesToShow: 5,
         slidesToScroll: 1,
         autoplay:true,
         autoplaySpeed: 3000,
         arrows: false,
         responsive: [
             {
                 breakpoint: 1000,
                 settings:{
                       slidesToShow: 4
                 }
             },
             {
                 breakpoint: 769,
                 settings: {
                     slidesToShow: 3
                 }
             },
             {
                 breakpoint: 480,
                 settings:{
                     slidesToShow: 2
                 }
             }
         ]
     })
})