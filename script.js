const chat = document.getElementById("chat");
const more_less = document.getElementById("more_less");
const collapse_block = document.getElementById("collapse_block");
let mousePressed = false;
let lastY;

chat.addEventListener('click', () => {
    collapse_block.style.transition = "0.5s";
    if (collapse_block.style.height === "50px") {
        collapse_block.style.height = "350px";
    } else {
        collapse_block.style.height = "50px";
    }
})
more_less.addEventListener('mousedown', (e) => {
    mousePressed = true;
    lastY = e.clientY;
});
addEventListener('mousemove', (e) => {
    if (mousePressed) {
        collapse_block.style.transition = null;
        const diff = e.clientY - lastY;
        const newHeight = Math.max(0, collapse_block.offsetHeight - diff);
        collapse_block.style.height = `${newHeight}px`;
        lastY = e.clientY;
    }
});
addEventListener('mouseup', () => {
    mousePressed = false;
});