function bubbles() {
    const count = 250;
    const container = document.querySelector(".container");
    let i = 0;
    while (i < count) {
        const snow = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let size = Math.random() * 8;

        snow.style.left = x + "px";
        snow.style.top = y + "px";
        snow.style.width = 1 + size + "px";
        snow.style.height = 1 + size + "px";

        snow.style.animationDuration = 6 + size + "s";
        snow.style.animationDelay = -size + "s";
        container.appendChild(snow);
        i++
    }
}
 bubbles()