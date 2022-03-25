const preloader = document.getElementById("preloader")

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        preloader.classList.add("rollOut")
    }, 3000)
})