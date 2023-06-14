
// favorites array from local storage
let favArr = JSON.parse(localStorage.getItem("faves")) || [];
console.log(favArr);


// favorites ddrinks array from local storage
let drinksArr = JSON.parse(localStorage.getItem("drinks")) || [];
console.log(drinksArr);

let repoCon = document.querySelector("#repos-container")

for (let i = 0; i < favArr.length; i++) {
    const element = favArr[i];
    let card = document.createElement("div")
    card.setAttribute("class","card")
    let cardHeader = document.createElement("header")
    cardHeader.setAttribute("class", "card-header")
    let title = document.createElement("p")
    title.setAttribute("class", "card-header-title")
    title.textContent = element.recipe.label
    let cardBtn = document.createElement("button")
    cardBtn.setAttribute("class", "card-header-icon")
    cardBtn.setAttribute("aria-label", "more options")
    let btnIcon = document.createElement("span")
    btnIcon.setAttribute("class", "icon")
    let btnI = document.createElement("i")
    btnI.setAttribute("class", "fas fa-angle-down")
    btnI.setAttribute("aria-hidden", "true")


    let cardImg = document.createElement("div")
    cardImg.setAttribute("class", "card-image")
    let fig = document.createElement("figure")
    fig.setAttribute("class", "image is-4by3")
    let img = document.createElement("img")
    img.setAttribute("src", element.recipe.images.SMALL.url)
    let calories = document.createElement("p")
    calories.setAttribute("class", "subtitle is-6")
    calories.textContent = "Calories: " + element.recipe.calories
    let recipeContent = document.createElement("div")
    recipeContent.setAttribute("class", "content")
    var list = " ";
    count = 1;
    for (var y = 0; y<element.recipe.ingredientLines.length; y++) {
        list = list + count + ".) " + element.recipe.ingredientLines[y] + " ";
        count++;
    }
    recipeContent.textContent = list;

    card.append(cardHeader)
    cardHeader.append(title)
    cardHeader.append(cardBtn)
    cardBtn.append(btnIcon)
    btnIcon.append(btnI)
    card.append(cardImg)
    cardImg.append(fig)
    fig.append(img)
    cardImg.append(calories)
    cardImg.append(recipeContent)
    // this should be last item in for loop
    repoCon.append(card)

}

//grabs array of recipe objects from local storage
//for loop cycles through each item in array and displays it on the page
//clicking on the recipes will take you to the recipe link page
