const generateMenu = function () {
    const contentContainer = document.querySelector("#content")

    const textBox = document.createElement("div");
    textBox.classList.add("text-box");
    contentContainer.appendChild(textBox);

    const menuList = document.createElement("ul");

    const menuItems = [
        {
            name: "Ham and Cheese Pizza",
            price: 89
        },
        {
            name: "Pepperoni Pizza",
            price: 99
        },
        {
            name: "Hawaiian Pizza",
            price: 99
        },
        {
            name: "Anchovy Pizza",
            price: 99
        },
        {
            name: "Vegetarian Pizza",
            price: 99
        },
        {
            name: "Bacon Pizza",
            price: 99
        },
        {
            name: "Creamy Spinach Pizza",
            price: 109
        },
        {
            name: "Meat Lover Pizza",
            price: 119
        }
    ]
    
    menuItems.forEach(dish => {
        const menuDish = document.createElement("li");
        menuDish.textContent = `${dish.name} | ${dish.price}`;
        menuList.appendChild(menuDish);
    })
}