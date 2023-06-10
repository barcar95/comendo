
var requestUrl = 'https://api.edamam.com/api/nutrition-data?app_id=93da02e5&app_key=52cb23abd54cda3f49dd9d24ff88115e&ingr=';
var ingrSearched = 'salmon';

var responseText = document.getElementById('response-text');

function getApi() {
  fetch(requestUrl+ingrSearched)
    .then(function (response) {
    
      return response.json();
    })
    .then(function (data) {
    console.log(data)
    }
)}

getApi();

var searchButton = document.getElementById('search-button');
var recipeInput = document.querySelector('#ingr-search');
var repoContainer = document.querySelector('#repo-container');
var repoSearchTerm = document.querySelector('#repo-search-term');
var apiKey = "56471103c10dd6e34e3dab273edd9a51";
var ident = "732afe70";

function getApi(searchTerm) {
    var recipeURL = "https://api.edamam.com/api/recipes/v2?app_key="+apiKey+"&app_id="+ident+"&q="+searchTerm+"&type=public";
    fetch(recipeURL).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data.hits);
            displayRecipes(data.hits);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
    });
}

var formSubmitHandler = function (event) {
    event.preventDefault();
    var ingrSearch = recipeInput.value.trim();
    if (ingrSearch) {
      getApi(ingrSearch);
      recipeInput.value = '';
    } else {
      alert('Please enter an ingredient to search with');
    }
};

var displayRecipes = function(repos) {
    if (repos.length === 0) {
        repoContainer.textContent = 'No repositories found.';
        return;
    }
    for (var i = 0; i < 10; i++) {
        //construct recipe card
        var count = 1;
        var recipeName = repos[i].recipe.label;
        var recipeTitle = document.createElement("h1");
        recipeTitle.classList = "title"
        recipeTitle.textContent = recipeName;
        var recipeCard = document.createElement('div');
        recipeCard.classList = "card";
        var recipeImg = document.createElement("img");
        var recipeImgURL = repos[i].recipe.image;
        recipeImg.setAttribute("src", recipeImgURL);
        var recipeCalory = document.createElement("P");
        recipeCalory.textContent ="Calories: "+repos[i].recipe.calories;
        var recipeURL = document.createElement("p");
        recipeURL.textContent = "URL: "+repos[i].recipe.url;

        repoContainer.appendChild(recipeCard);
        recipeCard.appendChild(recipeTitle);
        recipeCard.appendChild(recipeImg);
        recipeCard.appendChild(recipeCalory);
        for (var y = 0; y<repos[i].recipe.ingredientLines.length; y++) {
            var ingrList = document.createElement("span");
            ingrList.textContent = count + ".) " + repos[i].recipe.ingredientLines[y]+", ";
            count++;
            recipeCard.appendChild(ingrList);
        }
        recipeCard.appendChild(recipeURL);


        console.log(repos[i].recipe.label);//title of dish
        console.log(repos[i].recipe.image);//picture of dish
        console.log(repos[i].recipe.totalTime);//time in minutes to cook and prep
        console.log(repos[i].recipe.ingredientLines);//array of ingrediants
        console.log(repos[i].recipe.calories); //calories in the dish
        console.log(repos[i].recipe.url); //link to website for recipe
    }
};

searchButton.addEventListener('click', formSubmitHandler);
