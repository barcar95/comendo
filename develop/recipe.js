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