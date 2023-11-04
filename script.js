const container_box = document.querySelectorAll(".container-box span");
const btn = document.querySelector(".btn");
const rating = document.getElementById("rate");
const container = document.querySelector(".container");
const container_t = document.querySelector(".container-t");

let rate = null;

container_box.forEach((container_box) => {
    container_box.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        if (active) {
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    })
})

btn.addEventListener("click", () => {
    if (rate) {
        rating.innerText = rate;
        container.classList.add("hidden");
        container_t.classList.remove("hidden");
    }
})