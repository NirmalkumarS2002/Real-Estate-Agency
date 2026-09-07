let form = document.querySelector("#contact-form")

let name = document.querySelector("#con-name")
let number = document.querySelector("#con-number")
let email = document.querySelector("#con-email")
let subject = document.querySelector("#con-subject")
let area = document.querySelector("#con-area")

form.addEventListener("submit", (e) => {

    e.preventDefault()

    let valid = true

    let errors = document.querySelectorAll(".cerr")

    errors.forEach((error) => {
        error.textContent = ""
    })




    if (name.value.trim() === "") {

        name.nextElementSibling.textContent = "Name is required"
        valid = false

    }
    else if (!/^[a-zA-Z ]+$/.test(name.value.trim())) {

        name.nextElementSibling.textContent =
            "Name should contain only letters"

        valid = false
    }



    if (number.value.trim() === "") {

        number.nextElementSibling.textContent =
            "Phone number is required"

        valid = false

    }
    else if (!/^[0-9]+$/.test(number.value.trim())) {

        number.nextElementSibling.textContent =
            "Phone number should contain only numbers"

        valid = false

    }
    else if (number.value.trim().length !== 10) {

        number.nextElementSibling.textContent =
            "Phone number must be 10 digits"

        valid = false
    }



    if (email.value.trim() === "") {

        email.nextElementSibling.textContent =
            "Email is required"

        valid = false

    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {

        email.nextElementSibling.textContent =
            "Enter a valid email address"

        valid = false
    }



    if (subject.value.trim() === "") {

        subject.nextElementSibling.textContent =
            "Subject is required"

        valid = false
    }



    if (area.value.trim() === "") {

        area.nextElementSibling.textContent =
            "Message is required"

        valid = false
    }



    if (valid) {

        window.location.href="404.html"

        form.reset()
    }

})


//faq


let para=document.querySelectorAll(".para")
let arrow=document.querySelectorAll(".arrow")

arrow.forEach((el,index)=>{

    el.addEventListener("click",()=>{

        if(para[index].classList.contains("active")){
            para[index].classList.remove("active")
        }

        else{
            para.forEach((pa)=>{
                pa.classList.remove("active")
            })
            para[index].classList.add("active")
        }

    })

})