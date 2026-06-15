const btn = document.getElementById("toggleBtn");
const title = document.getElementById("title");

btn.addEventListener("click", () => {

    document.body.classList.toggle("light-on");

    if (document.body.classList.contains("light-on")) {
        btn.textContent = "Light Off";
        title.textContent = "Light on!";
        title.style.color = "black";
    } else {
        btn.textContent = "Light On";
        title.textContent = "Light off!";
        title.style.color = "white";
    }
});