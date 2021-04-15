let search=document.getElementById('search').value;

// limpiar input
window.addEventListener("load", function () {
     search.value = "";
});


const btn=document.querySelector('.btn');
btn.addEventListener("click",function() {

   fetch(getJson()).then(response => response.json())
         .then(data => {
             create_card(data.name,data.sys.country,data.main.temp,data.weather[0]["description"]);
   
        }).catch(error => console.log(error)); 

});

function getJson(){
   return 'https://api.openweathermap.org/data/2.5/weather?q='+search+'&appid=4d8fb5b93d4af21d66a2948710284366&units=metric';
}

function create_card(name,country,temp,description){
document.getElementById("card__").innerHTML += `
<div class="card">
      <div class="card_title">
        <p>${name}</p> <span>${country}</span>
      </div>
      <div class="card_time"><p>${Math.round(temp)}</p> <span>°C</span></div>
      <div class="icon">
        <i class="fas fa-cloud-sun" ></i>
        <span>${description}</span>
      </div>
    </div>
  </div>
`;
}
