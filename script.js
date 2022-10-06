
let texto_encriptar = document.querySelector(".mensaje1");
let texto_encriptado = document.querySelector(".mensaje2");

function encriptarTexto(string_encriptar){
    let letras = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    string_encriptar  = string_encriptar.toLowerCase();
    for (let i = 0; i < letras.length; i++){
        if (string_encriptar.includes(letras[i][0])){
            string_encriptar = string_encriptar.replaceAll(letras[i][0], letras[i][1]);
        }
    }                                                  
    return string_encriptar;
}
function desencriptarTexto(string_encriptado){
    let letras = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    string_encriptado  = string_encriptado.toLowerCase();
    for (let i = 0; i < letras.length; i++){
        if (string_encriptado.includes(letras[i][1])){
            string_encriptado = string_encriptado.replaceAll(letras[i][1], letras[i][0]);
        }
    }                                                  
    return string_encriptado;
}

function buttonEncriptar(){
    const textoEncriptado =  encriptarTexto(texto_encriptar.value);
    texto_encriptado.value = textoEncriptado;
    texto_encriptar.value = "";
    document.querySelector(".textareaDes").style.backgroundImage = "none";
}

function buttonDesencriptar(){
    const textoDesencriptado =  desencriptarTexto(texto_encriptar.value);
    texto_encriptado.value = textoDesencriptado;
    texto_encriptar.value = "";
    document.querySelector(".textareaDes").style.backgroundImage = "none";
}


function copy() {
    texto_encriptado.select();
    navigator.clipboard.writeText(texto_encriptado.value);
    alert("Texto copiado")
    texto_encriptado.value = "" 
}

