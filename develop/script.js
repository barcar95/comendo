var searchButton = document.getElementById('search-button');
var recipeInput = document.querySelector('#ingr-search');
var repoContainer = document.querySelector('#repo-container');
var repoSearchTerm = document.querySelector('#repo-search-term');
var apiKey = "56471103c10dd6e34e3dab273edd9a51";
var ident = "732afe70";

function getApi(searchTerm) {
    var recipeURL = "https://api.edamam.com/api/recipes/v2?app_key="+apiKey+"&app_id="+ident+"&q=chicken&type=public";
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
        console.log(repos[i].recipe.label);//title of dish
        console.log(repos[i].recipe.images.regular.url);//picture of dish
        console.log(repos[i].recipe.totalTime);//time in minutes to cook and prep
        console.log(repos[i].recipe.ingrediantLines);//array of ingrediants
        console.log(repos[i].recipe.calories); //calories in the dish
        console.log(repos[i].recipe.url); //link to website for recipe
    }
};

searchButton.addEventListener('click', formSubmitHandler);