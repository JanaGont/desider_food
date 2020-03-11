var foodArray = [
    "Hamburger",
    "Lasagna",
    "Pizza",
    "Ratatouille",
    "Risotto",
    "Salmon",
    "Shepards-pie",
    "Shrimp-Zucchini-Noodles",
    "Spagetti-bolognese",
    "Steak",
    "Taco",
    "Wraps",
    "Caesar-salad",
    "Chicken-breast",
    "Burrito"
];

function random() {
    var randomFood = document.getElementById("randomFood").innerHTML = foodArray[Math.floor(Math.random() * foodArray.length)];
    n = foodArray.length;
    document.getElementById("foodIMG").src = "images/" + randomFood + ".jpg";
    // if (randomFood == "Hamburger") {
    //     document.getElementById("recipe").innerHTML = "Hamburger recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Lasagna") {
    //     document.getElementById("recipe").innerHTML = "Lasagna recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Pizza") {
    //     document.getElementById("recipe").innerHTML = "Pizza recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Ratatouille") {
    //     document.getElementById("recipe").innerHTML = "Ratatouille recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Risotto") {
    //     document.getElementById("recipe").innerHTML = "Risotto recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Salmon") {
    //     document.getElementById("recipe").innerHTML = "Salmon recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Shepards-pie") {
    //     document.getElementById("recipe").innerHTML = "Shepards-pie recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Shrimp-Zucchini-Noodles") {
    //     document.getElementById("recipe").innerHTML = "Shrimp-Zucchini-Noodles recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Spagetti-bolognese") {
    //     document.getElementById("recipe").innerHTML = "Spagetti-bolognese recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Steak") {
    //     document.getElementById("recipe").innerHTML = "Steak recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Taco") {
    //     document.getElementById("recipe").innerHTML = "Taco recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Wraps") {
    //     document.getElementById("recipe").innerHTML = "Wraps recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Caesar-salad") {
    //     document.getElementById("recipe").innerHTML = "Caesar-salad recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Chicken-breast") {
    //     document.getElementById("recipe").innerHTML = "Chicken-breast recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    // if (randomFood == "Burrito") {
    //     document.getElementById("recipe").innerHTML = "Burrito recipe<br>Ingridients: <ul><li>bun</li> <li>meat</li><li>tomato</li> <li>chese</li></ul>";
    // }
    return random;
}

document.onload = random();