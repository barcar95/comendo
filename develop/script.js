

var searchButton = document.getElementById('search-button');
var recipeInput = document.querySelector('#ingr-search');
var repoContainer = document.querySelector('#repo-container');
var repoSearchTerm = document.querySelector('#repo-search-term');
var apiKey = "bce7a54c366b1109bfb579839a177f3f";
var ident = "a6b042ca";

// second API fetch function for nutrition database

// have ingredient list from first API pass through ingrSearched
//
// totalNutrientsKCal
// ENERC_KCAL
// : 
// label
// : 
// "Energy"
// quantity
// : 
// 0
// unit
// : 
// "kcal"
// [[Prototype]]
// : 
// Object
// FAT_KCAL
// : 
// label
// : 
// "Calories from fat"
// quantity
// : 
// 0
// unit
// : 
// "kcal"
// [[Prototype]]
// : 
// Object
// PROCNT_KCAL
// : 
// label
// : 
// "Calories from protein"
// quantity
// : 
// 0
// unit
// : 
// "kcal"
// [[Prototype]]
// : 
// Object
// [[Prototype]]
// : 
// Object
// totalWeight
// : 
// 0


function getApi(searchTerm) {
    var recipeURL = "https://api.edamam.com/api/recipes/v2?app_key="+apiKey+"&app_id="+ident+"&q="+searchTerm+"&type=public";
    fetch(recipeURL).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data.hits);
            displayRecipes(data.hits);
            saveRecipes(data.hits);
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
    var idchange = 1;
    for (var i = 0; i < 10; i++) {
      var count = 1;
       var idstring = "recipe-"+idchange;

        //var recipeLink = document.createElement("a");
        var recipeCard = document.createElement("div");
        recipeCard.classList = "card recipe-lining";
        recipeCard.setAttribute("id", idstring);
        idchange++;
        //recipeLink.setAttribute("href", "./develop/recipe.html")
        //repoContainer.appendChild(recipeLink);
        //recipeLink.appendChild(recipeCard);
        repoContainer.appendChild(recipeCard);

        var recipeImgContainer = document.createElement("div");
        recipeImgContainer.classList = "card-image";
        recipeCard.appendChild(recipeImgContainer);
        var recipeFigure = document.createElement("figure");
        recipeFigure.classList = "image is-4by3";
        recipeImgContainer.appendChild(recipeFigure);
        var recipeImg = document.createElement("img");
        var recipeImgURL = repos[i].recipe.image;
        recipeImg.setAttribute("src", recipeImgURL);
        recipeImg.setAttribute("alt", "Picture of the recipe");
        recipeFigure.appendChild(recipeImg);

        var cardContent = document.createElement("div");
        cardContent.classList = "card-content";
        recipeCard.appendChild(cardContent);

        var titleCaloriesContainer = document.createElement("div");
        titleCaloriesContainer.classList = "media";
        cardContent.appendChild(titleCaloriesContainer);
        var titleCalories = document.createElement("div");
        titleCalories.classList = "media-content";
        titleCaloriesContainer.appendChild(titleCalories);
        var title = document.createElement("p");
        title.classList = "title is-4";
        title.textContent = repos[i].recipe.label;
        var calories = document.createElement("p");
        calories.classList = "subtitle is-6";
        calories.textContent = "Calories: "+repos[i].recipe.calories;
        titleCalories.appendChild(title);
        titleCalories.appendChild(calories);

        var ingList = document.createElement("div");
        ingList.classList = "content";
        var list = " ";
        for (var y = 0; y<repos[i].recipe.ingredientLines.length; y++) {
          list = list + count + ".) " + repos[i].recipe.ingredientLines[y] + " ";
          count++;
        }
        ingList.textContent = list;
        cardContent.appendChild(ingList);

        var url = document.createElement("a");
        url.setAttribute("href", repos[i].recipe.url);
        url.classList = "content";
        url.textContent = "URL: "+repos[i].recipe.url;
        cardContent.appendChild(url);

        // recipeCard.append(displayNutrition());


        console.log(repos[i].recipe.label);//title of dish
        console.log(repos[i].recipe.image);//picture of dish
        console.log(repos[i].recipe.totalTime);//time in minutes to cook and prep
        console.log(repos[i].recipe.ingredientLines);//array of ingrediants
        console.log(repos[i].recipe.calories); //calories in the dish
        console.log(repos[i].recipe.url); //link to website for recipe
        
    }
};
// {
//   "recipe": {
//     "uri": "string",
//     "label": "string",
//     "image": "string",
//     "images": {
//       "THUMBNAIL": {
//         "url": "string",
//         "width": 0,
//         "height": 0
//       },
//       "SMALL": {
//         "url": "string",
//         "width": 0,
//         "height": 0
//       },
//       "REGULAR": {
//         "url": "string",
//         "width": 0,
//         "height": 0
//       },
//       "LARGE": {
//         "url": "string",
//         "width": 0,
//         "height": 0
//       }
//     },
//     "source": "string",
//     "url": "string",
//     "shareAs": "string",
//     "yield": 0,
//     "dietLabels": [
//       "string"
//     ],
//     "healthLabels": [
//       "string"
//     ],
//     "cautions": [
//       "string"
//     ],
//     "ingredientLines": [
//       "string"
//     ],
//     "ingredients": [
//       {
//         "text": "string",
//         "quantity": 0,
//         "measure": "string",
//         "food": "string",
//         "weight": 0,
//         "foodId": "string"
//       }
//     ],
//     "calories": 0,
//     "glycemicIndex": 0,
//     "totalCO2Emissions": 0,
//     "co2EmissionsClass": "A+",
//     "totalWeight": 0,
//     "cuisineType": [
//       "string"
//     ],
//     "mealType": [
//       "string"
//     ],
//     "dishType": [
//       "string"
//     ],
//     "instructions": [
//       "string"
//     ],
//     "tags": [
//       "string"
//     ],
//     "externalId": "string",
//     "totalNutrients": {},
//     "totalDaily": {},
//     "digest": [
//       {
//         "label": "string",
//         "tag": "string",
//         "schemaOrgTag": "string",
//         "total": 0,
//         "hasRDI": true,
//         "daily": 0,
//         "unit": "string",
//         "sub": {}
//       }
//     ]
//   },
//   "_links": {
//     "self": {
//       "href": "string",
//       "title": "string"
//     },
//     "next": {
//       "href": "string",
//       "title": "string"
//     }
//   }
// }

searchButton.addEventListener('click', formSubmitHandler);

function saveRecipes(repos) {
  var recipe1 = document.getElementById('recipe-1');
  var recipe2 = document.getElementById('recipe-2');
  var recipe3 = document.getElementById('recipe-3');
  var recipe4 = document.getElementById('recipe-4');
  var recipe5 = document.getElementById('recipe-5');
  var recipe6 = document.getElementById('recipe-6');
  var recipe7 = document.getElementById('recipe-7');
  var recipe8 = document.getElementById('recipe-8');
  var recipe9 = document.getElementById('recipe-9');
  var recipe10 = document.getElementById('recipe-10');

  recipe1.addEventListener('click', function() {
    window.localStorage.setItem("recipe", JSON.stringify(repos[0]));
    window.location.href = "./develop/recipe.html";
  });
  recipe2.addEventListener('click', function() {
    window.localStorage.setItem("recipe", JSON.stringify(repos[1]));
    window.location.href = "./develop/recipe.html";
  });
  recipe3.addEventListener('click', function() {
    window.localStorage.setItem("recipe", JSON.stringify(repos[2]));
    window.location.href = "./develop/recipe.html";
  });
  recipe4.addEventListener('click', function() {
    window.localStorage.setItem("recipe", JSON.stringify(repos[3]));
    window.location.href = "./develop/recipe.html";
  });
  recipe5.addEventListener('click', function() {
    window.localStorage.setItem("recipe", JSON.stringify(repos[4]));
    window.location.href = "./develop/recipe.html";
  });
  recipe6.addEventListener('click', function() {
    window.localStorage.setItem("recipe", JSON.stringify(repos[5]));
    window.location.href = "./develop/recipe.html";
  });
  recipe7.addEventListener('click', function() {
    window.localStorage.setItem("recipe", JSON.stringify(repos[6]));
    window.location.href = "./develop/recipe.html";
  });
  recipe8.addEventListener('click', function() {
    window.localStorage.setItem("recipe", JSON.stringify(repos[7]));
    window.location.href = "./develop/recipe.html";
  });
  recipe9.addEventListener('click', function() {
    window.localStorage.setItem("recipe", JSON.stringify(repos[8]));
    window.location.href = "./develop/recipe.html";
  });
  recipe10.addEventListener('click', function() {
    window.localStorage.setItem("recipe", JSON.stringify(repos[9]));
    window.location.href = "./develop/recipe.html";
  });
};
