// favorites ddrinks array from local storage
let drinksArr = JSON.parse(localStorage.getItem("drinks")) || [];
// local stor recipe object
let recipeObj = JSON.parse(localStorage.getItem("recipe"))
  console.log(recipeObj);


var repoContainer = document.querySelector('#repos-container');


function getSecondApi() {
    var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayDrink(data.drinks[0]);
        // for testing favs array in localstor
        // drinksArr.push(data.drinks[0])
        // localStorage.setItem("drinks", JSON.stringify(favArr))
      return data;
      }
  )};

    let newObject = window.localStorage.getItem("recipe");
    console.log(JSON.parse(newObject));
    var recipeObject = JSON.parse(newObject);

  function displayDrink(drink) {
    console.log(drink)
    //strDrink -- name
    //strDrinkThumb --picture
    var drinkImgBox = document.createElement("figure");
    var drinkImg = document.createElement("img");
    drinkImgBox.classList = "my-3 mx-3";
    var drinkImgurl = drink.strDrinkThumb;
    drinkImg.setAttribute("src", drinkImgurl);
    repoContainer.appendChild(drinkImgBox);
    drinkImgBox.appendChild(drinkImg);

    var drinkButton = document.createElement("button");
    drinkButton.classList = "button is-inline-block is-justify-content-end";
    drinkButton.textContent = "Favorite";
    repoContainer.appendChild(drinkButton);

    var drinkName = document.createElement("h1");
    drinkName.textContent = drink.strDrink;
    drinkName.classList = "title is-1 my-3 mx-3";
    repoContainer.appendChild(drinkName);

    var drinkIngr = document.createElement("p");
    if (drink.strIngredient1) {
      drinkIngr.textContent = drink.strIngredient1;
      repoContainer.appendChild(drinkIngr);
        if (drink.strIngredient2) {
          var ingr2 = document.createElement("p");
          ingr2.textContent = drink.strIngredient2;
          repoContainer.appendChild(ingr2);
          if (drink.strIngredient3) {
            var ingr3 = document.createElement("p");
            ingr3.textContent = drink.strIngredient3;
            repoContainer.appendChild(ingr3);
            if (drink.strIngredient4) {
              var ingr4 = document.createElement("p");
              ingr4.textContent = drink.strIngredient4;
              repoContainer.appendChild(ingr4);
              if (drink.strIngredient5) {
                var ingr5 = document.createElement("p");
                ingr5.textContent = drink.strIngredient5;
                repoContainer.appendChild(ingr5);
                if (drink.strIngredient6) {
                  var ingr6 = document.createElement("p");
                  ingr6.textContent = drink.strIngredient6;
                  repoContainer.appendChild(ingr6);
                  if (drink.strIngredient7) {
                    var ingr7 = document.createElement("p");
                    ingr7.textContent = drink.strIngredient7;
                    repoContainer.appendChild(ingr7);
                    if (drink.strIngredient8) {
                      var ingr8 = document.createElement("p");
                      ingr8.textContent = drink.strIngredient8;
                      repoContainer.appendChild(ingr8);
                      if (drink.strIngredient9) {
                        var ingr9 = document.createElement("p");
                        ingr9.textContent = drink.strIngredient9;
                        repoContainer.appendChild(ingr9);
                        if (drink.strIngredient10) {
                          var ingr10 = document.createElement("p");
                          ingr10.textContent = drink.strIngredient10;
                          repoContainer.appendChild(ingr10);
                          if (drink.strIngredient11) {
                            var ingr11 = document.createElement("p");
                            ingr11.textContent = drink.strIngredient11;
                            repoContainer.appendChild(ingr11);
                            if (drink.strIngredient12) {
                              var ingr12 = document.createElement("p");
                              ingr12.textContent = drink.strIngredient12;
                              repoContainer.appendChild(ingr12);
                              if (drink.strIngredient13) {
                                var ingr13 = document.createElement("p");
                                ingr13.textContent = drink.strIngredient13;
                                repoContainer.appendChild(ingr13);
                                if (drink.strIngredient14) {
                                  var ingr14 = document.createElement("p");
                                  ingr14.textContent = drink.strIngredient14;
                                  repoContainer.appendChild(ingr14);
                                  if (drink.strIngredient15) {
                                    var ingr15 = document.createElement("p");
                                    ingr15.textContent = drink.strIngredient15;
                                    repoContainer.appendChild(ingr15);
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

  }
  
  function displayRecipe (){
    //picture of recipe
    var recImgBox = document.createElement("figure");
    var recImg = document.createElement("img");
    recImgBox.classList = "my-3 mx-3 is-inline-block";
    var recImgurl = recipeObject.recipe.image;
    recImg.setAttribute("src", recImgurl);
    repoContainer.appendChild(recImgBox);
    recImgBox.appendChild(recImg);
    //title of recipe
    var recTitle = document.createElement("h1");
    recTitle.classList = "title is-1 my-3 mx-3 is-inline";
    recTitle.textContent = recipeObject.recipe.label;
    repoContainer.appendChild(recTitle);
    //cuisine type
    var recType = document.createElement("h3");
    recType.classList = "subtitle is-3 my-3 mx-3 is-inline-block";
    recType.textContent = recipeObject.recipe.cuisineType[0];
    repoContainer.appendChild(recType);
    var recButton = document.createElement("button");
    recButton.classList = "button is-inline-block is-justify-content-end";
    recButton.textContent = "Favorite";

    // fav button functionality
    recButton.addEventListener("click", function(){
      
      let favArr = JSON.parse(localStorage.getItem("faves")) || [];
      console.log(favArr);
      favArr.push(recipeObject)

      localStorage.setItem("faves", JSON.stringify(favArr));

    })


    repoContainer.appendChild(recButton);
    //yield
    var recYield = document.createElement("h3");
    recYield.classList = "subtitle is-3 my-3 mx-3";
    recYield.textContent = "Feeds: "+recipeObject.recipe.yield;
    repoContainer.appendChild(recYield);
    //ingr list in form of ol
    var listContainer = document.createElement("ol");
    listContainer.classList = "menu-list";
    repoContainer.appendChild(listContainer);
    var ingr = document.createElement("li");
    ingr.classList = "subtitle is-5 my-3 mx-3";
    ingr.textContent = "Ingredients:";
    listContainer.appendChild(ingr);
    for (i=0; i<recipeObject.recipe.ingredientLines.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = "- "+recipeObject.recipe.ingredientLines[i];
      listContainer.appendChild(listItem);
    }
    //link to page
    var url = document.createElement("a");
    url.setAttribute("href", recipeObject.recipe.url);
    url.classList = "mx-6 my-6";
    url.textContent = "URL: "+recipeObject.recipe.url;
    repoContainer.appendChild(url);
  };

displayRecipe();
getSecondApi();