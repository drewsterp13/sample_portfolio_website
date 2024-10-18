function openContactInfo() {
    let shade = document.createElement("div");
    shade.id = "shade";

    let window = document.createElement("div");
    window.id = "window";

    let text_element = document.createElement("h3");
    let text_content = document.createTextNode("Contact Info");
    text_element.appendChild(text_content);
    window.appendChild(text_element);
    
    text_element = document.createElement("p");
    let icon_element = document.createElement("i");
    icon_element.classList.add("fa-solid")
    icon_element.classList.add("fa-phone")
    text_element.appendChild(icon_element);
    text_content = document.createTextNode(": +1 123-456-7890");
    text_element.appendChild(text_content);
    window.appendChild(text_element);

    text_element = document.createElement("p");
    icon_element = document.createElement("i");
    icon_element.classList.add("fa-solid")
    icon_element.classList.add("fa-envelope")
    text_element.appendChild(icon_element);
    text_content = document.createTextNode(": endermanthompson@craftmail.com");
    text_element.appendChild(text_content);
    window.appendChild(text_element);

    text_element = document.createElement("p");
    icon_element = document.createElement("i");
    icon_element.classList.add("fa-brands")
    icon_element.classList.add("fa-linkedin")
    text_element.appendChild(icon_element);
    text_content = document.createTextNode(": linkedin_link_goes_here");
    text_element.appendChild(text_content);
    window.appendChild(text_element);

    text_element = document.createElement("p");
    icon_element = document.createElement("i");
    icon_element.classList.add("fa-brands")
    icon_element.classList.add("fa-github")
    text_element.appendChild(icon_element);
    text_content = document.createTextNode(": github_link_goes_here");
    text_element.appendChild(text_content);
    window.appendChild(text_element);

    let button_element = document.createElement("button");
    button_element.classList.add("close-button")
    let button_content = document.createTextNode("CLOSE");
    button_element.appendChild(button_content);
    button_element.onclick = function() {closeContactInfo()};
    window.appendChild(button_element);

    shade.appendChild(window);

    let element = document.getElementById("tip");
    element.appendChild(shade);
}

function closeContactInfo() {
    let window = document.getElementById("shade");
    window.remove();
    console.log("IT WORKS");
}