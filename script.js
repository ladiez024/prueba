function mostrarCaracteristicas(){
    const caracteristicas = document.getElementById("caracteristicas");
    const boton = document.getElementById("boton");
    const ocultar = document.getElementById("ocultar");

    // Alterna la visibilidad de las características
    caracteristicas.style.display = "block";
    boton.style.display = "none";
    ocultar.style.display = "block";
}

function ocultarCaracteristicas(){
    const caracteristicas = document.getElementById("caracteristicas");
    const boton= document.getElementById("boton");
    const ocultar = document.getElementById("ocultar");

    // Alterna la visibilidad de las características
    console.log("dentrooo");
    caracteristicas.style.display = "none";
    boton.style.display = "block";
    ocultar.style.display = "none";

}
function tamaño(tipo){
    // Selecciona los elementos
    const h1 = document.querySelector("h1");
    const h3 = document.querySelector("h3");
    const p = document.querySelector("p");
    // Selecciona el contenedor del texto sin etiqueta
    const textoSinEtiqueta = document.querySelector(".texto-sin-etiqueta");

    if (tipo == "grande"){
        h1.style.fontSize = "3rem";
        h3.style.fontSize = "2rem";
        p.style.fontSize = "1.5rem";
        textoSinEtiqueta.style.fontSize = "1.5rem";

    }else if(tipo == "mediano"){
        h1.style.fontSize = "2.5rem";
        h3.style.fontSize = "1.75rem";
        p.style.fontSize = "1rem";
        textoSinEtiqueta.style.fontSize = "1rem";

    }else{
        h1.style.fontSize = "2rem";
        h3.style.fontSize = "1.5rem";
        p.style.fontSize = "1rem";
        textoSinEtiqueta.style.fontSize = "1rem";
    }
}

function diseño(tipo){
    let boton = document.getElementById('boton');
    let ocultar = document.getElementById('ocultar');
    if(tipo=="dia"){
        document.body.classList.add('modo-claro');
        document.body.classList.remove('modo-oscuro');
        document.body.classList.remove('modo-predeterminado');
        boton.classList.remove('btn-outline-light');
        boton.classList.add('btn-outline-dark');
        ocultar.classList.remove('btn-outline-light');
        ocultar.classList.add('btn-outline-dark');
    }else if(tipo =="noche"){
        document.body.classList.add('modo-oscuro');
        document.body.classList.remove('modo-claro');
        document.body.classList.remove('modo-predeterminado');
        boton.classList.remove('btn-outline-dark');
        boton.classList.add('btn-outline-light');
        ocultar.classList.remove('btn-outline-dark');
        ocultar.classList.add('btn-outline-light');
    }else if(tipo =="auto"){
        document.body.classList.add('modo-predeterminado');
        document.body.classList.remove('modo-oscuro');
        document.body.classList.remove('modo-claro');
        boton.classList.remove('btn-outline-light');
        boton.classList.add('btn-outline-dark');
        ocultar.classList.remove('btn-outline-light');
        ocultar.classList.add('btn-outline-dark');
    }
}
