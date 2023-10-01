const textArea = document.querySelector(".text-area");
const boxMessage = document.querySelector(".box-message");
const instructions = document.getElementById("instructions");
const copyButton = document.querySelector(".btn-copy");
window.addEventListener("load", checkResolution);
window.addEventListener("resize", checkResolution);


/*
Change leter "e" for "enter"
Change leter "i" for "imes"
Change leter "a" for "ai"
Change leter "o" for "ober"
Change leter "u" for "ufat"
*/

// This is are the function to encrypt, btnEncrypt grab the value on textArea and implements the function encrypt.

function btnEncrypt(){
    const textEncrypted = encrypt(textArea.value);
    boxMessage.value = textEncrypted;
    textArea.value="";
    instructions.style.display = "none";
    boxMessage.style.backgroundImage = "none";
    if (window.innerWidth >= 200) {
        
        copyButton.style.display = "block";
    }


}

// This funtion basically goes throught the matriz or array and check if letter match change it to next index.

function encrypt(stringEncripted){
    
let matrizCode = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncripted = stringEncripted.toLowerCase();

    for(let i = 0; i < matrizCode.length; i++ ){
        
        if(stringEncripted.includes(matrizCode[i][0])){
            stringEncripted = stringEncripted.replaceAll(matrizCode[i][0], matrizCode[i][1]);
        }
       
    }
    
    return stringEncripted;
}

//This function basically decrypt the text we have on textarea box. calling the function decrypt.

function btnDecrypt(){
    const textEncrypted = decrypt(textArea.value);
    boxMessage.value = textEncrypted;
    textArea.value="";
    instructions.style.display = "none";
    boxMessage.style.backgroundImage = "none";
    copyButton.style.display = "block";

}

// This funtion basically goes throught the matriz or array and check if letter match change it to next index.

function decrypt(stringDecripted){
    
    let matrizCode = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDecripted = stringDecripted.toLowerCase();
    
        for(let i = 0; i < matrizCode.length; i++ ){
            
            if(stringDecripted.includes(matrizCode[i][1])){
                stringDecripted = stringDecripted.replaceAll(matrizCode[i][1], matrizCode[i][0] );
            }
           
        }
        
        return stringDecripted;
    }


// funtion allow us to copy what is on box-message class.

function btncopy(){

    const copyText = document.querySelector(".box-message");
    copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);
    boxMessage.value = "";
    const instructions = document.getElementById("instructions");
    instructions.style.display = "block";
    boxMessage.style.backgroundImage = "url('Imagenes/Muñeco(1).png')"

    if (window.innerWidth <= 768) {
        const boxMessage = document.querySelector(".box-message");
        boxMessage.style.backgroundImage = "none";
        copyButton.style.display = "none";
    } else if(window.innerWidth<= 480){
        const boxMessage = document.querySelector(".box-message");
        boxMessage.style.backgroundImage = "none";
        copyButton.style.display = "none";
    } else {
        copyButton.style.display = "none";
    }

}


function checkResolution() {
    const copyButton = document.querySelector(".btn-copy");
    if (window.innerWidth >= 100) {
        // Si la resolución es menor o igual a 768px, oculta el botón de copia
        copyButton.style.display = "none";
    }  else if(window.innerWidth >= 100 && window.innerWidth <= 1024 ){
        boxMessage.style.backgroundImage = "none";
    } else {
        // Si la resolución es mayor a 768px, muestra el botón de copia
        copyButton.style.display = "block";
       
    }
}






