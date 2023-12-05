//mostrar sección del HTML en caso de ser de Argentina
/*
const checkbox = document.getElementById("afirmativo");
const seccion = document.querySelector(".labelslocalizacion")

checkbox.addEventListener("change", function(){
    if (this.checked){
        seccion.innerHTML = `
        <div class="divlocalizacion">
        <label style="margin-right: 0.2rem;">Provincia </label>
        <select id="selectProvincias">
          <option value="Selecciona tu provincia">Selecciona tu provincia</option>
        </select>
        <span></span>
        </div>

        <div class="divlocalizacion">
        <label style="margin-right: 0.2rem;">Municipio</label>
        <select id="selectMunicipio">
          <option value="Selecciona tu Municipio">Selecciona tu municipio</option>
        </select>
        <span></span>
        </div>`
    } else {seccion.innerHTML="";}
})*/

//Constantes para la informaciòn traída desde la API
const $d= document;
const $selectProv = $d.getElementById("selectProvincias");
const $selectMun = $d.getElementById("selectMunicipio");

//Hacer una petición a una Api

function provincias(){
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let $prov = `<option value="Selecciona tu provincia">Selecciona tu provincia</option>`;
        json.provincias.forEach(el => $prov += `<option value="${el.nombre}">${el.nombre}</option>`);
        $selectProv.innerHTML= $prov;
    
    })
       
    
    
}

$d.addEventListener("DOMContentLoaded", provincias)

function municipios(provincias){
    fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincias}&max=999`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let $mun = `<option value="Selecciona tu Municipio">Selecciona tu municipio</option>`;
        json.municipios.forEach(el => $mun += `<option value="${el.id}">${el.nombre}</option>`);
        $selectMun.innerHTML= $mun;
    
    })
    fetch(`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${provincias}&max=500`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let $dep = `<option value="Selecciona tu Municipio">Selecciona tu municipio</option>`;
        json.departamentos.forEach(el => $dep += `<option value="${el.id}">${el.nombre}</option>`);
     
        $selectMun.innerHTML += $dep;

    })
           
}

$selectProv.addEventListener("change", e => {
    municipios(e.target.value);
})

