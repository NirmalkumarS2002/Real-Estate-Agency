let navbar=document.querySelector(".menuwrap")
let menubtn=document.querySelector(".menubtn")
let menuspan=document.querySelector(".menuspan")

menubtn.addEventListener("click",()=>{

    if(menuspan.textContent=="menu"){
        menuspan.textContent="close"
        navbar.classList.add("active")
    }
    else{
        menuspan.textContent="menu"
        navbar.classList.remove("active")
    }


})