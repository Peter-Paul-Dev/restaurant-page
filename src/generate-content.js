const contentContainer = document.querySelector("#content")

const headline = document.createElement("h1"); 
headline.textContent = "Eat here";
contentContainer.appendChild(headline);

export let exportVariables = {contentContainer, headline};