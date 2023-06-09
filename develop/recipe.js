//burger menu
const burgerIcon = document.querySelector('#burger');
const navbarMenuHeroC = document.querySelector('#navbarMenuHeroC');

burgerIcon.addEventListener('click', () => {
  navbarMenuHeroC.classList.toggle('is-active');
});

var repoContainer = document.querySelector('#repos-container');


function getSecondApi() {
    var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayDrink(data.drinks[0]);
      return data;
      }
  )};

    let newObject = window.localStorage.getItem("recipe");
    console.log(JSON.parse(newObject));
    var recipeObject = JSON.parse(newObject);

    

  function displayDrink(drink) {
    console.log(drink)
    var drinkCard = document.createElement("div");
    drinkCard.classList = "card recipe-lining";
    repoContainer.appendChild(drinkCard);

    var imgHoldDrink = document.createElement("div");
    imgHoldDrink.classList = "card-image";
    drinkCard.appendChild(imgHoldDrink);

    var drinkImgBox = document.createElement("figure");
    var drinkImg = document.createElement("img");
    drinkImgBox.classList = "image";
    var drinkImgurl = drink.strDrinkThumb;
    drinkImg.setAttribute("src", drinkImgurl);
    imgHoldDrink.appendChild(drinkImgBox);
    drinkImgBox.appendChild(drinkImg);

    var drinkContent = document.createElement("div");
    drinkContent.classList = "card-content";
    drinkCard.appendChild(drinkContent);
    
    var buttonContainerDrink = document.createElement("div");
    buttonContainerDrink.classList = "align-right";
    drinkContent.appendChild(buttonContainerDrink);
    var drinkButton = document.createElement("button");
    drinkButton.classList = "button";
    drinkButton.textContent = "Fav";
    buttonContainerDrink.appendChild(drinkButton);

    //title of recipe
    var drinktitleBox = document.createElement("div");
    drinktitleBox.classList = "media-content";
    drinkContent.appendChild(drinktitleBox);
    var drinkTitle = document.createElement("p");
    drinkTitle.classList = "title is-4";
    drinkTitle.textContent = drink.strDrink;
    drinktitleBox.appendChild(drinkTitle);

    var drinkingr = document.createElement("p");
    drinkingr.classList = "subtitle is-5 my-3 mx-3";
    drinkingr.textContent = "Ingredients:";
    drinkContent.appendChild(drinkingr);
    var drinklistContainer = document.createElement("ol");
    drinklistContainer.classList = "menu-list";
    drinkContent.appendChild(drinklistContainer);

    //strDrink -- name
    //strDrinkThumb --picture
    //ol style="list-style-type:upper-roman"
    var drinkIngr = document.createElement("li");
    if (drink.strIngredient1) {
      drinkIngr.textContent = drink.strIngredient1;
      drinklistContainer.appendChild(drinkIngr);
        if (drink.strIngredient2) {
          var ingr2 = document.createElement("li");
          ingr2.textContent = drink.strIngredient2;
          drinklistContainer.appendChild(ingr2);
          if (drink.strIngredient3) {
            var ingr3 = document.createElement("li");
            ingr3.textContent = drink.strIngredient3;
            drinklistContainer.appendChild(ingr3);
            if (drink.strIngredient4) {
              var ingr4 = document.createElement("li");
              ingr4.textContent = drink.strIngredient4;
              drinklistContainer.appendChild(ingr4);
              if (drink.strIngredient5) {
                var ingr5 = document.createElement("li");
                ingr5.textContent = drink.strIngredient5;
                drinklistContainer.appendChild(ingr5);
                if (drink.strIngredient6) {
                  var ingr6 = document.createElement("li");
                  ingr6.textContent = drink.strIngredient6;
                  drinklistContainer.appendChild(ingr6);
                  if (drink.strIngredient7) {
                    var ingr7 = document.createElement("li");
                    ingr7.textContent = drink.strIngredient7;
                    drinklistContainer.appendChild(ingr7);
                    if (drink.strIngredient8) {
                      var ingr8 = document.createElement("li");
                      ingr8.textContent = drink.strIngredient8;
                      drinklistContainer.appendChild(ingr8);
                      if (drink.strIngredient9) {
                        var ingr9 = document.createElement("li");
                        ingr9.textContent = drink.strIngredient9;
                        drinklistContainer.appendChild(ingr9);
                        if (drink.strIngredient10) {
                          var ingr10 = document.createElement("li");
                          ingr10.textContent = drink.strIngredient10;
                          drinklistContainer.appendChild(ingr10);
                          if (drink.strIngredient11) {
                            var ingr11 = document.createElement("li");
                            ingr11.textContent = drink.strIngredient11;
                            drinklistContainer.appendChild(ingr11);
                            if (drink.strIngredient12) {
                              var ingr12 = document.createElement("li");
                              ingr12.textContent = drink.strIngredient12;
                              drinklistContainer.appendChild(ingr12);
                              if (drink.strIngredient13) {
                                var ingr13 = document.createElement("li");
                                ingr13.textContent = drink.strIngredient13;
                                drinklistContainer.appendChild(ingr13);
                                if (drink.strIngredient14) {
                                  var ingr14 = document.createElement("li");
                                  ingr14.textContent = drink.strIngredient14;
                                  drinklistContainer.appendChild(ingr14);
                                  if (drink.strIngredient15) {
                                    var ingr15 = document.createElement("li");
                                    ingr15.textContent = drink.strIngredient15;
                                    drinklistContainer.appendChild(ingr15);
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
      
      drinkButton.addEventListener("click", function(){
      
        let drinksArr = JSON.parse(localStorage.getItem("drinks")) || [];
        console.log(drinksArr);
        drinksArr.push(drink)
    
        localStorage.setItem("drinks", JSON.stringify(drinksArr));
    
      })
    }

  
  function displayRecipe (){
    //picture of recipe
    var recipeCard = document.createElement("div");
    recipeCard.classList = "card recipe-lining";
    repoContainer.appendChild(recipeCard);

    var imgHold = document.createElement("div");
    imgHold.classList = "card-image";
    recipeCard.appendChild(imgHold);

    var recImgBox = document.createElement("figure");
    var recImg = document.createElement("img");
    recImgBox.classList = "image";
    var recImgurl = recipeObject.recipe.image;
    recImg.setAttribute("src", recImgurl);
    imgHold.appendChild(recImgBox);
    recImgBox.appendChild(recImg);

    var cardContent = document.createElement("div");
    cardContent.classList = "card-content";
    recipeCard.appendChild(cardContent);
    
    var buttonContainer = document.createElement("div");
    buttonContainer.classList = "align-right";
    cardContent.appendChild(buttonContainer);
    var recButton = document.createElement("button");
    recButton.classList = "button";
    recButton.textContent = "Fav";
    buttonContainer.appendChild(recButton);

    //title of recipe
    var titleBox = document.createElement("div");
    titleBox.classList = "media-content";
    cardContent.appendChild(titleBox);
    var recTitle = document.createElement("p");
    recTitle.classList = "title is-4";
    recTitle.textContent = recipeObject.recipe.label;
    titleBox.appendChild(recTitle);
    //cuisine type
    var recType = document.createElement("p");
    recType.classList = "subtitle is-6 mx-6 is-underlined";
    recType.textContent = recipeObject.recipe.cuisineType[0];
    titleBox.appendChild(recType);

    // fav button functionality
    recButton.addEventListener("click", function(){
      
      let favArr = JSON.parse(localStorage.getItem("faves")) || [];
      console.log(favArr);
      favArr.push(recipeObject)

      localStorage.setItem("faves", JSON.stringify(favArr));

    })
    //yield
    /*var contentContainer = document.createElement("div");
    contentContainer.classList = "content";
    cardContent.appendChild(contentContainer);*/

    var recYield = document.createElement("p");
    recYield.classList = "content m-3";
    recYield.textContent = "Feeds: "+recipeObject.recipe.yield;
    cardContent.appendChild(recYield);
    //ingr list in form of ol
    var ingr = document.createElement("p");
    ingr.classList = "subtitle is-5 my-3 mx-3";
    ingr.textContent = "Ingredients:";
    cardContent.appendChild(ingr);
    var listContainer = document.createElement("ol");
    listContainer.classList = "menu-list";
    cardContent.appendChild(listContainer);
    for (i=0; i<recipeObject.recipe.ingredientLines.length; i++) {
      var listItem = document.createElement("li");
      listItem.classList = "mx-3 my-1";
      listItem.textContent = recipeObject.recipe.ingredientLines[i];
      listContainer.appendChild(listItem);
    }
    //link to page
    var url = document.createElement("a");
    url.setAttribute("href", recipeObject.recipe.url);
    url.classList = "mx-6 my-6 has-text-centered";
    url.textContent = "URL: "+recipeObject.recipe.url;
    cardContent.appendChild(url);
  };

displayRecipe();
getSecondApi();