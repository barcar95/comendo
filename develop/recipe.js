// favorites array from local storage
let favArr = JSON.parse(localStorage.getItem("faves")) || [];
// favorites ddrinks array from local storage
let drinksArr = JSON.parse(localStorage.getItem("drinks")) || [];
// local stor recipe object
let recipeObj = JSON.parse(localStorage.getItem("recipe"))
  console.log(recipeObj);

// for testing favs array in localstor
// favArr.push(recipeObj)
// localStorage.setItem("faves", JSON.stringify(favArr))




function getSecondApi() {
    var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        // for testing favs array in localstor
        // drinksArr.push(data.drinks[0])
        // localStorage.setItem("drinks", JSON.stringify(favArr))
      return data;
      }
  )};
  
  function displayNutritionData (data, container){
    console.log(data, container);
    let dataContainer = document.createElement("ul");
    let listItem = document.createElement("li");
    let chocdfKCal = data.totalNutrientsKCal.CHOCDF_KCAL;
    let energKCal = data.totalNutrientsKCal.ENERC_KCAL;
  
  
    listItem.innerHTML(`${chocdfKCal.label}: ${chocdfKCal.quantity} ${chocdfKCal.unit} <br> ${energKCal.label}: ${energKCal.quantity} ${energKCal.unit}`);
    dataContainer.append(listItem);
    dataContainer.appendTo(container);
  };
  
  function displayNutrition (ingredients) {
    for (let i = 0; i < ingredients.length; i++) {
      const element = ingredients[i];
      getSecondApi(element.food);
      console.log(element.food);
      displayNutritionData
    } 
  };

  getSecondApi();