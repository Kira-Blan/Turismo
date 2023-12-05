var data = [
    {
        img: "Assets/imagenes/Merlo.jpg",
        lugar:"Merlo",
     estadia:"4 Noches", 
     traslado:"Aereo",
     pension:"Media pensión",
     precio:59988
    },
    {
        img: "Assets/imagenes/bariloche.jpg",
        lugar:"Bariloche",
     estadia:"5 Noches", 
     traslado: "Aereo",
     pension: "Pensión completa",
     precio:99988
    },
    {
        img: "Assets/imagenes/chilecito-la-rioja.jpg",
        lugar:"Chilecito",
     estadia:"3 Noches", 
     traslado:"Aereo",
     pension:"Pensión completa",
     precio:75999
    },
    {
        img: "Assets/imagenes/cataratas.jpg",
        lugar:"Cataratas",
     estadia:"3 Noches", 
     traslado:"Aereo",
     pension:"Media pensión",
     precio:65988
    },
    {
        img: "Assets/imagenes/mendoza.jpg",
        lugar:"Mendoza",
     estadia:"4 Noches", 
     traslado:"Aereo",
     pension:"Media pensión",
     precio:89999
    }, 
    {
        img: "Assets/imagenes/Jujuy2.png",
        lugar:"Jujuy",
     estadia:"6 Noches", 
     traslado:"Aereo",
     pension:"Pension completa",
     precio:159788
    },
   ]
   

var promo=[];
if (document.getElementById("container_promos")) {
    for (let i = 0; i < data.length; i++) {
     promo += `<a class=a_promo href="contactanos.html">
        <div class="card_promo">
        <img src=${data[i].img} alt="chubut" class=img >
        <p class="lugar">${data[i].lugar}</p> 
        <p class="estadia">${data[i].estadia}</p> 
        <p class="traslado">${data[i].traslado}</p> 
        <p class="pension">${data[i].pension}</p> 
        <p class="precio">$ ${data[i].precio}</p>
        </div>
        </a>`;
    }
    document.getElementById("container_promos").innerHTML=promo;
}