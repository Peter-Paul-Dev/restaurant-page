const generateContent = (function () {
    const contentContainer = document.querySelector("#content")

    const textBox = document.createElement("div");
    textBox.classList.add("text-box");
    contentContainer.appendChild(textBox);

    const headline = document.createElement("h1"); 
    headline.textContent = "Stop by for a meal you won't forget!";
    textBox.appendChild(headline);

    const infoBox = document.createElement("div");
    infoBox.classList.add("info");
    textBox.appendChild(infoBox);

    const schedule = document.createElement("p");
    schedule.textContent = "Schedule: Open all week from 10AM-9PM";
    infoBox.appendChild(schedule);

    const location = document.createElement("p");
    location.textContent = "Address: #123, Pepporoni St., Dough City, United Plates Of Kitchlandia";
    infoBox.appendChild(location);

    const contactNumber = document.createElement("p");
    contactNumber.textContent = "Number: 1234567890"
    infoBox.appendChild(contactNumber);

    const emailAddress = document.createElement("p");
    emailAddress.textContent = "Email: petersplentifulpizzaria@pizzalover.com";
    infoBox.appendChild(emailAddress);
})();

export let exportContent = {contentContainer};