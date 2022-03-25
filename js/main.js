let header = document.querySelector("header")
let sub_header = document.querySelector(".secondary-header")

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 200){
        sub_header.classList.add("active")
    }else{
        sub_header.classList.remove("active")
        if(window.innerWidth < 980){
            sub_header.classList.add("active")
        }
        window.addEventListener("resize", ()=>{
            if(window.innerWidth < 980){
                sub_header.classList.add("active")
            }
        })
    }
})

if(window.innerWidth < 980){
    sub_header.classList.add("active")
    header.style.display = "none"
}else{
    sub_header.classList.remove("active")
    header.style.display = "block"
}
window.addEventListener("resize", ()=>{
    if(window.innerWidth < 980){
        sub_header.classList.add("active")
        header.style.display = "none"
    }else{
        sub_header.classList.remove("active")
        header.style.display = "block"
    }
})

let menu_trigger = document.querySelector(".navTrigger");
let mobile_menu = document.querySelector(".secondary-header nav");

menu_trigger.addEventListener("click", ()=>{
    menu_trigger.classList.toggle("active")
    mobile_menu.classList.toggle("show")
})

const landing = document.querySelector("#landing")
if(window.innerWidth < 1000){
    landing.style.marginTop = "80px"
}
