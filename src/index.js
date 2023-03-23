import cipher from './cipher.js';

console.log(cipher);


 /* intento de barra de desplazamiento
  document.getElementById("ofsetC")addEventListener("keyup",function(){
    ofsetCV= ofsetC.value
    document.getElementById("number").innerHTML= ofsetCV
  }) */


const copyCE = document.getElementById("copyC");

copyCE.addEventListener("click", function(){
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
  
   const answer = cipher.encode(offset,userTextCArr)
 cipheredE.innerHTML = answer;
  })    

/*
█▀▀▄ █▀▀ █▀▀ █▀▀  ▀  █▀▀ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ 
█  █ █▀▀ ▀▀█ █    █  █▀▀ █▄▄▀ █▄▄█ █  █ █  █ 
▀▀▀  ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀   ▀ ▀▀ ▀  ▀ ▀▀▀  ▀▀▀▀
*/

const copyDE = document.getElementById("copyD");

copyDE.addEventListener("click", function(){
  let copyText= userTextDE.value;
  navigator.clipboard.writeText(copyText)
  .then(() => console.log('Copied to clipboard'))
  .catch(err => console.error('Could not copy text: ', err));
});

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
    

    

    