let wish=document.querySelectorAll(".pg-fav")

wish.forEach((el)=>{

    el.addEventListener("click",()=>{

       el.classList.toggle("active")

       setTimeout(()=>{
 el.classList.remove("active")
       },5000)

    })

})


let pageemail = document.querySelector(".pageemail")
let pagebtn = document.querySelector(".pagebtn")
let pageerr = document.querySelector(".pageerr")

pagebtn.addEventListener("click", (e) => {

    e.preventDefault()

    let emailvalue = pageemail.value.trim()

    // Empty validation
    if (emailvalue === "") {

        pageerr.style.color = "red"
        pageerr.textContent = "Please enter your email"

        return
    }

    // Email validation
    let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailpattern.test(emailvalue)) {

        pageerr.style.color = "red"
        pageerr.textContent = "Please enter a valid email address"

        return
    }

    // Success
    pageerr.style.color = "green"
    pageerr.textContent = "You'll be notified successfully!"

    pageemail.value = ""

    // Remove message after 3 seconds
    setTimeout(() => {

        pageerr.textContent = ""

    }, 3000)

})