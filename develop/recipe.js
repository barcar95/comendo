//favorite button adds object to end of an array created on favorite screen
    //  if array empty commit initial array to local storage
//array committed to local storage after recipe is added

var repoContainer = document.querySelector('#repos-container');

function getSecondApi() {
    var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      return data;
      }
  )};

    let newObject = window.localStorage.getItem("recipe");
    console.log(JSON.parse(newObject));
    var recipeObject = JSON.parse(newObject);
  
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