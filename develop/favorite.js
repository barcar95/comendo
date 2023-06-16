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

for (let i = 0; i < drinksArr.length; i++) {
    const element = drinksArr[i];
    let card = document.createElement("div")
    card.setAttribute("class","card")
    let cardHeader = document.createElement("header")
    cardHeader.setAttribute("class", "card-header")
    let title = document.createElement("p")
    title.setAttribute("class", "card-header-title")
    title.textContent = element.strDrink
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
    img.setAttribute("src", element.strDrinkThumb)
    let ingrHeader = document.createElement("p")
    ingrHeader.setAttribute("class", "subtitle is-6")
    ingrHeader.setAttribute("id", "ingred-header")
    ingrHeader.textContent = "Ingredients: "
    let recipeContent = document.createElement("div")
    recipeContent.setAttribute("class", "content")
    if (element.strIngredient1) {
        var drinkIngr = document.createElement("p");
        drinkIngr.textContent = element.strIngredient1;
        recipeContent.appendChild(drinkIngr);
          if (element.strIngredient2) {
            var ingr2 = document.createElement("p");
            ingr2.textContent = element.strIngredient2;
            recipeContent.appendChild(ingr2);
            if (element.strIngredient3) {
              var ingr3 = document.createElement("p");
              ingr3.textContent = element.strIngredient3;
              recipeContent.appendChild(ingr3);
              if (element.strIngredient4) {
                var ingr4 = document.createElement("p");
                ingr4.textContent = element.strIngredient4;
                recipeContent.appendChild(ingr4);
                if (element.strIngredient5) {
                  var ingr5 = document.createElement("p");
                  ingr5.textContent = element.strIngredient5;
                  recipeContent.appendChild(ingr5);
                  if (element.strIngredient6) {
                    var ingr6 = document.createElement("p");
                    ingr6.textContent = element.strIngredient6;
                    recipeContent.appendChild(ingr6);
                    if (element.strIngredient7) {
                      var ingr7 = document.createElement("p");
                      ingr7.textContent = element.strIngredient7;
                      recipeContent.appendChild(ingr7);
                      if (element.strIngredient8) {
                        var ingr8 = document.createElement("p");
                        ingr8.textContent = element.strIngredient8;
                        recipeContent.appendChild(ingr8);
                        if (element.strIngredient9) {
                          var ingr9 = document.createElement("p");
                          ingr9.textContent = element.strIngredient9;
                          recipeContent.appendChild(ingr9);
                          if (element.strIngredient10) {
                            var ingr10 = document.createElement("p");
                            ingr10.textContent = element.strIngredient10;
                            recipeContent.appendChild(ingr10);
                            if (element.strIngredient11) {
                              var ingr11 = document.createElement("p");
                              ingr11.textContent = element.strIngredient11;
                              recipeContent.appendChild(ingr11);
                              if (element.strIngredient12) {
                                var ingr12 = document.createElement("p");
                                ingr12.textContent = element.strIngredient12;
                                recipeContent.appendChild(ingr12);
                                if (element.strIngredient13) {
                                  var ingr13 = document.createElement("p");
                                  ingr13.textContent = element.strIngredient13;
                                  recipeContent.appendChild(ingr13);
                                  if (element.strIngredient14) {
                                    var ingr14 = document.createElement("p");
                                    ingr14.textContent = element.strIngredient14;
                                    recipeContent.appendChild(ingr14);
                                    if (element.strIngredient15) {
                                      var ingr15 = document.createElement("p");
                                      ingr15.textContent = element.strIngredient15;
                                      recipeContent.appendChild(ingr15);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
    
    card.append(cardHeader)
    cardHeader.append(title)
    cardHeader.append(cardBtn)
    cardBtn.append(btnIcon)
    btnIcon.append(btnI)
    card.append(cardImg)
    cardImg.append(fig)
    fig.append(img)
    cardImg.append(ingrHeader)
    
    cardImg.append(recipeContent)
    // this should be last item in for loop
    repoCon.append(card)

}
