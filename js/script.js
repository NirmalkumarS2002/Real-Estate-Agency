let navbar = document.querySelector(".menuwrap")
let menubtn = document.querySelector(".menubtn")
let menuspan = document.querySelector(".menuspan")

menubtn.addEventListener("click", () => {

    if (menuspan.textContent == "menu") {
        menuspan.textContent = "close"
        navbar.classList.add("active")
    }
    else {
        menuspan.textContent = "menu"
        navbar.classList.remove("active")
    }

})


let errorpage = document.querySelectorAll(".errorpage")
errorpage.forEach((err) => {
    err.addEventListener("click", () => {
        window.location.href = "404.html"
    })
})


//footer form

let subemail = document.querySelector("#subemail")
let subbtn = document.querySelector(".subscribe-btn")
    let frmerr = document.querySelector(".frmerr")



subbtn.addEventListener("click", (e) => {

    e.preventDefault()

    let isvalid = true;
    let emailvalue = subemail.value.trim()

    // Empty validation
    if (emailvalue === "") {

        frmerr.textContent = "Please enter your email address"

        isvalid = false;
    }


    // Email validation
    let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailpattern.test(emailvalue)) {

        frmerr.textContent = "Please enter a valid email address"

        isvalid = false;
    }



    if (isvalid) {

        frmerr.style.color = "green"
        frmerr.textContent = "Subscribed successfully!"

        subemail.value = ""

        setTimeout(() => {

            frmerr.textContent = ""
            frmerr.style.color = "red"

        }, 3000)

    }


})




// reveal animation 

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showed");
        }
    })
}, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
})

document.querySelectorAll(".reveal, .reveal-right, .reveal-left").forEach((el) => {
    observer1.observe(el)
})


