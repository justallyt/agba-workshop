const column_links = document.querySelectorAll(".maneno-links .link-box")
const column_containers = document.querySelectorAll(".maneno-box")

const switch_containers = (index) =>{
    column_links.forEach((btn)=>{
        btn.classList.remove("active")
    })
    column_links[index].classList.add('active')

    column_containers.forEach((container)=>{
        container.style.display = "none"
    })
    column_containers[index].style.display = 'block'
}
switch_containers(0);

for(let i = 0; i < column_links.length; i++){
    column_links[i].addEventListener("click", ()=>{
        switch_containers(i)
    })
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