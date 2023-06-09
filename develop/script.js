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

getApi(requestUrl);