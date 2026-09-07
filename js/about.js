
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