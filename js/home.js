//hero section animation

let herosection = document.querySelector(".hero-section")
let image = ["./src/banner3.webp", "./src/banner2.webp", "./src/banner4.webp"]
let index = 0;

setInterval(() => {

    index++

    if (index > image.length - 1) {
        index = 0;
    }

    herosection.style.backgroundImage = `  linear-gradient(125deg, rgba(0, 0, 0, 0.466), rgba(0, 0, 0, 0.527)), url(${image[index]})`

}, 2000)

//count animation

let stats = document.querySelectorAll(".counts")

let observer = new IntersectionObserver((entries, observer) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            let stat = entry.target;
            let target = Number(stat.dataset.target);
            let count = 0;

            let duration = 1500
            let increment = target / (duration / 20);

            let timer = setInterval(() => {

                count += increment;

                if (count >= target) {
                    count = target;
                    clearInterval(timer)
                }


                if (count === 40) {
                    stat.textContent = Math.floor(count) + "k"
                }
                else if (count === 100) {
                    stat.textContent = Math.floor(count) + "%"
                }
                else {
                    stat.textContent = Math.floor(count) + "+"
                }

            }, 20)



        }
    })

}, {
    threshold: "0.2"
})

stats.forEach((el) => {
    observer.observe(el)
})


