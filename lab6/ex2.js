function addParagraph() {
    const mainContainer = document.getElementById("main_container");
    const paragraph = document.createElement("p");
    const paragraphText = document.getElementById("add_paragraph_text").value;
    const paragraphId = document.getElementById("add_paragraph_id").value;
    const textNode = document.createTextNode(
        paragraphText + " ID: " + paragraphId
    );
    paragraph.appendChild(textNode);
    paragraph.id = paragraphId;
    mainContainer.appendChild(paragraph);
}

function showParagrapghWithId() {
    const id = document.getElementById("add_paragraph_id").value;
    const collection = document.getElementsByTagName("p");
    const paragraphText = collection.namedItem(id).textContent;

    alert(paragraphText);
}

function showParagraphWithNumber() {
    const number = parseInt(
        document.getElementById("paragraph_number").value
    ) - 1;
    const collection = document.getElementsByTagName("p");

    if (!(number > collection.length || number < 0)) {
        const paragraphText = collection.item(number).textContent;
        alert(paragraphText);
    } else {
        alert("Wrong number");
    }
}

function addImage() {
    const container = document.getElementById("images");
    const img = document.createElement("img");
    img.src = "lech.png";
    img.alt = "lech";
    img.style.height = "50px";
    img.style.width = "30px";

    container.appendChild(img);
}

function addAnchor() {
    const container = document.getElementById("anchors");
    const anchor = document.createElement("a");
    anchor.href = "https://e7.pngegg.com/pngimages/812/755/png-clipart-fish-fish.png";
    anchor.text = "Anchor";
    anchor.name = "name";

    container.appendChild(anchor);
}

function addForm() {
    const container = document.getElementById("forms");
    const form = document.createElement("form");
    const formTitle = document.createElement("h4");
    const textNode = document.createTextNode("Form");
    formTitle.appendChild(textNode);
    form.appendChild(formTitle);
    const input = document.createElement("input");
    input.type = "text";
    form.appendChild(input);



    container.appendChild(form);
}

function count() {
    const images = document.images.length;
    const links = document.links.length;
    const forms = document.forms.length;
    const anchors = document.anchors.length;

    alert(
        "Number of \n" +
        "Images -> " + images + "\n" +
        "links -> " + links + "\n" +
        "forms -> " + forms + "\n" +
        "anchors -> " + anchors + "\n"
        );
}