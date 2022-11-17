function addListElement() {
    const list = document.getElementById("list");
    const elementText = document.getElementById("element_text").value;
    const listItem = document.createElement("li");
    const textNode = document.createTextNode(elementText);


    listItem.appendChild(textNode);
    list.appendChild(listItem);
}

function removeListElement() {
    const list = document.getElementById("list");
    const index = document.getElementById("list_index").value;

    if (index) {
        list.removeChild(list.children[parseInt(index)]);
    } else {
        list.removeChild(list.firstElementChild);
    }
}

function replaceListElement() {
    const list = document.getElementById("list");
    const index = document.getElementById("list_index").value;

    const elementText = document.getElementById("element_text").value;
    const listItem = document.createElement("li");
    const textNode = document.createTextNode(elementText);
    listItem.appendChild(textNode);

    if (index) {
        list.replaceChild(listItem, list.children[parseInt(index)]);
    } else {
        alert("No index given");
    }
}

function insertBeforeListElement() {
    const list = document.getElementById("list");
    const index = document.getElementById("list_index").value;

    const elementText = document.getElementById("element_text").value;
    const listItem = document.createElement("li");
    const textNode = document.createTextNode(elementText);
    listItem.appendChild(textNode);

    if (index) {
        list.insertBefore(listItem, list.children[parseInt(index)]);
    } else {
        alert("No index given");
    }
}

function addSecondLevelListElement() {
    const list = document.getElementById("list");
    const index = document.getElementById("list_index").value;
    const elementText = document.getElementById("element_text").value;

    if (index) {
        const listItem = list.children[parseInt(index)];
        const secondLevellistItem = document.createElement("li");
        secondLevellistItem.style.marginLeft = "30px";
        const textNode = document.createTextNode(elementText);
        secondLevellistItem.appendChild(textNode);

        listItem.appendChild(secondLevellistItem);
    } else {
        alert("No index given");
    }
}

function changeBackground() {
    const list = document.getElementById("list");
    const text = document.getElementById("element_text").value;
    let i = 0;
    let j = 0;
    for (i = 0; i < list.children.length; i += 1) {
        for (j = 0; j < list.children[i].children.length; j += 1) {
            const element = list.children[i].children[j];
            if (element.textContent === text) {
                element.parentNode.style.backgroundColor = "blue";
            }
        }
    }
}