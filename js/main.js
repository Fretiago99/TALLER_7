// Segundo Punto

document.addEventListener("DOMContentLoaded",workshop7)
function workshop7 () {
    console.log("Contenido del DOM cargado");

    console.log("------------Point 3------------")
    
    const origen = document.getElementById("origen"); 
    origen.value = "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>"
    console.log("loaded");

    console.log("------------Point 4------------")

    origen.addEventListener("input",activeButton)
    const input = document.getElementsByTagName("input");
    const button = document.getElementsByTagName("button");

    if (origen.value) {
        button[0].disabled = false;
        for (let i = 0; i < input.length; i++) {
            input[i].disabled = false;
        }
    }
    
    function activeButton () {
        if (origen.value) {
            button[0].disabled = false;
            for (let i = 0; i < input.length; i++) {
                input[i].disabled = false;
            }   
        }else{
            button[0].disabled = true;
            for (let i = 0; i < input.length; i++) {
                input[i].disabled = true;
            }
        }
    }

    console.log("------------Point 5 and Point 6------------")
    
    const destino = document.getElementById("destino");
    const btnReplace = document.getElementById("btn-reemplazar");
    
    input[0].addEventListener("click",btns);
    input[1].addEventListener("click",btns);
    input[2].addEventListener("click",btns);
    input[3].addEventListener("click",btns);
    input[4].addEventListener("click",btns);
    input[5].addEventListener("click",btns);
    input[6].addEventListener("click",btns);
    button[0].addEventListener("click",btns);
    
    
    function add (data) {
        let content = origen.value;
        for (let i = 1; i < data; i++) {
            content = content.concat(origen.value)
        }
        destino.innerText = content;
    }
    
    function btns (dato) {
        let data = dato.target.attributes;
        if(data.class || data.id){
            let idInput = data.value.value;
            if (idInput === "Reemplazar") {
                destino.innerText = origen.value;
                origen.value = "";
            }else if(idInput === "Agregar"){
                add(1);
            }else if(idInput === "Agregar 5 veces"){
                add(5);
            }else if(idInput === "Agregar 10 veces"){
                add(10);
            }else if(idInput === "Agregar n veces"){
                add(window.prompt("Indique la cantidad de veces que desea agregar el contenido"));
            }else if(idInput === "Vaciar"){
                destino.innerText = "";
            }else if (idInput === "Convertir a mayúsculas") {
                destino.innerText = destino.innerText.toUpperCase();
            }
        }else{
            let idButton = dato.target.type;
            if (idButton === "button"){
                destino.innerText = destino.innerText.toLowerCase();
            }
        }
    }
    
    console.log("------------Point 7------------")

    liUpdate();

    function liUpdate (){
        const li = document.getElementsByTagName("li");
        let contentLi = "";
        for (let i = 0; i < li.length; i++) {
            contentLi = li[i].innerText;
            li[i].innerText = `OK ${contentLi}`;
        }

    }
    
}
