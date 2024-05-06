const storm = document.querySelector(".storm");

const maxSize = 500;
const currentElements = [];

storm.addEventListener("mousemove", (event) => {
    if (maxSize > currentElements.length) {
        const pageX = event.offsetX;
        const pageY = event.offsetY;

        const img = createImg(pageX, pageY);

        storm.append(img);
        currentElements.push(img);

        img.addEventListener("animationend", (event) => {
            img.remove();
            currentElements.splice(currentElements.indexOf(img), 1)
        })
    }
});


function createImg(pageX, pageY) {
    let img = document.createElement("img");

    img.classList.add("img");
    img.src = "./fire.png";

    img.style.left = pageX + "px";
    img.style.top = pageY + "px";
    const size = Math.random() * 100;
    img.style.width = size + "px";
    img.style.height = size + "px";

    return img;
}