
/*
Página desarrollada  por Jhonathan O'brian Saavedra web's, subida y alojada en github para que los desarrolladores puedan ver el codigo y usarlo para test. 
En Inter Tech ayudamos los jóvenes que van empezando. Siguenos en Facebook: https://www.facebook.com/InteraccionTecnologica y 
github como:https://github.com/intertech20/ 
*/

/* ==============================================
                    VARIABLES
 ==============================================*/
let search=document.getElementById('search');

/* ==============================================
                    CARGAR MODAL 
 ==============================================*/
window.addEventListener("load", function () {
     document.querySelector('.modal').style.display="flex";
     search.value= "";
});


/* ==============================================
                    CARGAR LAS CONSULTAS 
                    DE LA API MOSTRAR LA 
                          DATA
 ==============================================*/
const btn=document.querySelector('.btn');
btn.addEventListener("click",function() {
   fetch(getJson()).then(response => response.json())
         .then(data => {
            
            if(data.cod=='404'){
        
              document.querySelector('.menssage').textContent='Busque una ciudad válida 😩';
            }
            else{
              document.querySelector('.menssage').textContent='';
              create_card(data.name,data.sys.country,data.main.temp,data.weather[0]["description"],
          data.weather[0]["icon"],data.main.humidity,Math.round(data.main.temp_max),Math.round(data.main.temp_min));
          pronostico_5_days(data.name);
           search.value = "";
            }
        }).catch(error => console.log(error)); 

});

/* ==============================================
              RETORNAR EL LINKS JSON
 ==============================================*/
function getJson(){
    return 'https://api.openweathermap.org/data/2.5/weather?q='+search.value+'&appid=f8ec163645e180f634459ba5aaadf9dd&units=metric&lang=es';
}

/* ==============================================
                RETORNAR EL LINKS JSON
 ==============================================*/
function pronostico_5_days(params) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${params}&appid=87e4f01705095dec0164761d3cb63252&units=metric&lang=es`).then(response => response.json())
   .then(data => {
   
}).catch(error => console.log(error)); 
}



function date_pronostico_function (number,data_1,data_2,data_3){
document.querySelector(".date_pronostico_"+number).innerHTML=`
<p class="text_clima_item_left">${data_1}</p>
<p class="text_clima_item_right">
<i class="fas fa-long-arrow-alt-up"></i>
${data_2} ° C</p>
<p class="text_clima_item_right">
<i class="fas fa-long-arrow-alt-down"></i>
${data_3} ° C</p>`
}
function create_card(name,country,temp,description,icon,humdad,temp_max,temp_min){

 document.getElementById("card__").innerHTML = `
 <div class="card" >
 <div class="card_title">
   <p title="${name}">${name}</p> <span title="${country}">${country}</span>
 </div>
 <div class="card_time" title="Tempratura ${Math.round(temp)}°C"><p>${Math.round(temp)}</p> <span title="Tempratura ${Math.round(temp)}°C">°C</span></div>
 <div class="icon">

<img class="temp-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg" title="${description}" alt="${description}">
   <span style="text-transform: capitalize;" title="${description}">${description}</span>
   
   <div class="temp_info">
   
<span title="Humedad"><i title="Humedad" class="fas fa-tint"></i>${humdad}</span>
<span title="Tempratura Minima"><i  title="Tempratura Minima" class="fas fa-thermometer-quarter"></i> ${temp_min}</span>
<span title="Tempratura Maxima"><i title="Tempratura Maxima" class="fas fa-thermometer-three-quarters"></i>${temp_max}</span>
   <div/>

  
</div>
</div>
` ;

}

/* ==============================================
                  CERAR EL MODAL
 ==============================================*/
function exit_modal() {

        document.querySelector(".modal").style = "display: none;";
    
}

