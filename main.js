

let search=document.getElementById('search');

window.addEventListener("load", function () {
     // .modal
     document.querySelector('.modal').style.display="flex";
     search.value= "";
});



const btn=document.querySelector('.btn');
btn.addEventListener("click",function() {
   fetch(getJson()).then(response => response.json())
         .then(data => {
             create_card(data.name,data.sys.country,data.main.temp,data.weather[0]["description"],
              data.weather[0]["icon"],data.main.humidity,Math.round(data.main.temp_max),Math.round(data.main.temp_min));
              search.value = "";
        }).catch(error => console.log(error)); 

});

function getJson(){
    return 'https://api.openweathermap.org/data/2.5/weather?q='+search.value+'&appid=f8ec163645e180f634459ba5aaadf9dd&units=metric&lang=es';
}

function create_card(name,country,temp,description,icon,humdad,temp_max,temp_min){

 document.getElementById("card__").innerHTML = `
<div class="card" >
      <div class="card_title">
        <p>${name}</p> <span>${country}</span>
      </div>
      <div class="card_time" title="Tempratura ${Math.round(temp)}°C"><p>${Math.round(temp)}</p> <span>°C</span></div>
      <div class="icon">
  
<img class="temp-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg" title="${description}" alt="${description}">
        <span style="text-transform: capitalize;">${description}</span>
        
        <div class="temp_info">
<span title="Humedad"><i class="fas fa-tint"></i>${humdad}</span>
<span title="Tempratura Minima"><i class="fas fa-thermometer-quarter"></i> ${temp_min}</span>
<span title="Tempratura Maxima"><i class="fas fa-thermometer-three-quarters"></i>${temp_max}</span>
        <div/>

      </div>
    </div>
  </div>
` ;

}


function exit_modal() {

        document.querySelector(".modal").style = "display: none;";
    
}

//         <i class="fas fa-cloud-sun" ></i>
// https://fontawesome.com/icons?d=gallery&p=2&q=%20clouds
/*
clear sky
broken clouds
scattered clouds
light snow
overcast clouds
light rain

cielo limpio
nubes rotas
nubes dispersas
nieve ligera
nubes nubladas
lluvia ligera
https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg
*/
