function getCursorPosition(event) {
    const x = (event.clientX * 80) / window.innerWidth + 5 + "%";
    const y = (event.clientY * 80) / window.innerHeight + 5 + "%";

    const eye2 = document.getElementById("eye2");
    const eye1 = document.getElementById("eye1");

    eye2.style.left = x;
    eye2.style.top = y;
    eye2.style.transform = `translate(-${x},-${y})`;

    eye1.style.left = x;
    eye1.style.top = y;
    eye1.style.transform = `translate(-${x},-${y})`;
}