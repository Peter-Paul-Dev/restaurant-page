const generateContent = (function () {
    const contentContainer = document.querySelector("#content")

    const textBox = document.createElement("div");
    textBox.classList.add("text-box");
    contentContainer.appendChild(textBox);

    const headline = document.createElement("h1"); 
    headline.textContent = "Eat here";
    textBox.appendChild(headline);
})();

export let exportVariables = {contentContainer};