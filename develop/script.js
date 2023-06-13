

var searchButton = document.getElementById('search-button');
var recipeInput = document.querySelector('#ingr-search');
var repoContainer = document.querySelector('#repo-container');
var repoSearchTerm = document.querySelector('#repo-search-term');
var apiKey = "bce7a54c366b1109bfb579839a177f3f";
var ident = "a6b042ca";

// second API fetch function for nutrition database

// have ingredient list from first API pass through ingrSearched
//
function getSecondApi(ingr) {
  var requestUrl = 'https://api.edamam.com/api/nutrition-data?app_id=93da02e5&app_key=52cb23abd54cda3f49dd9d24ff88115e&ingr=';
  fetch(requestUrl+ingr)
    .then(function (response) {
    
      return response.json();
    })
    .then(function (data) {
    // console.log("")
    // console.log(data)
    return data 
    }
)}

function displayNutritionData (data, container){
  console.log(data, container);
  let dataContainer = document.createElement("ul");
  let listItem = document.createElement("li");
  let chocdfKCal = data.totalNutrientsKCal.CHOCDF_KCAL;
  let energKCal = data.totalNutrientsKCal.ENERC_KCAL;


  listItem.innerHTML(`${chocdfKCal.label}: ${chocdfKCal.quantity} ${chocdfKCal.unit} <br> ${energKCal.label}: ${energKCal.quantity} ${energKCal.unit}`);
  dataContainer.append(listItem);
  dataContainer.appendTo(container);
}

function displayNutrition (ingredients) {
  for (let i = 0; i < ingredients.length; i++) {
    const element = ingredients[i];
    getSecondApi(element.food);
    console.log(element.food);
    displayNutritionData
  } 
}
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
            getSecondApi(searchTerm)
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
        /*
        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
        */
       var count = 1;

        var recipeCard = document.createElement("div");
        recipeCard.classList = "card recipe-lining";
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

        var url = document.createElement("p");
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
        displayNutrition(repos[i].recipe.ingredients,recipeCard);
        
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
