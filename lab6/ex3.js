function setProperties() {
    const background = document.getElementById("background").value;
    const color = document.getElementById("text_color").value;
    const fontFamily = document.getElementById("font").value;

    const paragraph = document.getElementById("paragraph");
    paragraph.style.background = background;
    paragraph.style.color = color;
    paragraph.style.fontFamily = fontFamily;
}