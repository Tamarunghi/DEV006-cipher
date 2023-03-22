import cipher from './cipher.js';

console.log(cipher);


 /* intento de barra de desplazamiento
  document.getElementById("ofsetC")addEventListener("keyup",function(){
    ofsetCV= ofsetC.value
    document.getElementById("number").innerHTML= ofsetCV
  }) */


const copyE = document.getElementById("copy");

copyE.addEventListener("click", function(){
  let copyText= userTextCE.value;
  navigator.clipboard.writeText(copyText)
  .then(() => console.log('Copied to clipboard'))
  .catch(err => console.error('Could not copy text: ', err));
});


 /*
  █▀▀  ▀  █▀▀ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ 
  █    █  █▀▀ █▄▄▀ █▄▄█ █  █ █  █ 
  ▀▀▀ ▀▀▀ ▀   ▀ ▀▀ ▀  ▀ ▀▀▀  ▀▀▀▀
 */
const userTextCE = document.getElementById("userTextC");
const offsetE = document.getElementById("offset");
const cipheredE = document.getElementById("ciphered")
 

document.getElementById("bttnC").addEventListener("click", function(){
    const userTextC = userTextCE.value;
    /* parseInt convierte string a número sino el offset no f(na)*/
    const offset = parseInt(offsetE.value);
    const userTextCArr = userTextC.split("");
  
    /* CICLO CON MAP*/
    /* const codedArr=> array para, con push, agregar textCoded 
    fuera del ciclo y que se muestre en la pg web */
    const codedArr=[]
    userTextCArr.map(letter => {
      const asciiValue = letter.charCodeAt(0);
      let codedValue;
      /* letras mayúsculas*/
      if ( asciiValue >= 65 && asciiValue <=90){
      codedValue = (asciiValue -65 + offset)%26+65; 
       /* letras minúsculas*/
      } else if (asciiValue >= 97 && asciiValue <=122){
      codedValue = (asciiValue -97 + offset)%26+97;
       /* números*/
      } else if (asciiValue >= 48 && asciiValue <=57){
        codedValue = (asciiValue -48 + offset)%10+48;
      }else {
        codedValue=asciiValue;
      }
      const textCoded = String.fromCharCode(codedValue); 
      codedArr.push(textCoded);
    
    }); 


     /* RESPUESTA EN PG*/
       /* offset.length >0 se cambió a !isNaN(offset), ya que anteriormente el 
       offset se cambio de string a number con parsInt y length funciona solo con string*/
    if (userTextC.length >0 && !isNaN(offset)){
           /* sea grega join ya que al cifrar mensaje se cambio string a array, join lo 
           vuelve a convertir en string*/
      cipheredE.innerHTML = codedArr.join("");
    } else {
    cipheredE.innerHTML = "Por favor escriba mensaje"  
    } 

  })

/*
█▀▀▄ █▀▀ █▀▀ █▀▀  ▀  █▀▀ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ 
█  █ █▀▀ ▀▀█ █    █  █▀▀ █▄▄▀ █▄▄█ █  █ █  █ 
▀▀▀  ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀   ▀ ▀▀ ▀  ▀ ▀▀▀  ▀▀▀▀
*/

const userTextDE = document.getElementById("userTextD");
 const offset2E = document.getElementById("offset2");
 const decipheredDE = document.getElementById("deciphered")
 

 document.getElementById("bttnD").addEventListener("click", function(){
    const userTextD = userTextDE.value;
    const offset2 = parseInt(offset2E.value);
    const userTextDArr = userTextD.split("");
  
    const decodedArr=[]
    userTextDArr.map(letter => {
      const asciiValue = letter.charCodeAt(0);
      let codedValue;
      /* letras mayúsculas*/
      if ( asciiValue >= 65 && asciiValue <=90){
      codedValue = (asciiValue -65-offset2+26)%26+65; 
       /* letras minúsculas*/
      } else if (asciiValue >= 97 && asciiValue <=122){
      codedValue = (asciiValue -97-offset2+26)%26+97;
       /* números*/
      } else if (asciiValue >= 48 && asciiValue <=57){
        codedValue = (asciiValue -48-offset2+10)%10+48;
      }else {
        codedValue=asciiValue;
      }
      const textCoded = String.fromCharCode(codedValue); 
      decodedArr.push(textCoded);
    });   

    if (userTextD.length >0 && !isNaN(offset2)){
      decipheredDE.innerHTML = decodedArr.join("");
    } else {
    decipheredDE.innerHTML = "Por favor escriba mensaje"  
    } 

  })
    

    

    