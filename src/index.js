import cipher from './cipher.js';

console.log(cipher);


/* intento de barra de desplazamiento
  document.getElementById("ofsetC").addEventListener("keyup",function(){
    ofsetCV= ofsetC.value
    document.getElementById("number").innerHTML= ofsetCV
  }) */


/*
  █▀▀  ▀  █▀▀ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ 
  █    █  █▀▀ █▄▄▀ █▄▄█ █  █ █  █ 
  ▀▀▀ ▀▀▀ ▀   ▀ ▀▀ ▀  ▀ ▀▀▀  ▀▀▀▀
 */
const copyCE = document.getElementById("copyC");

copyCE.addEventListener("click", function(){
  const copyText= userTextCE.value;
  navigator.clipboard.writeText(copyText)
    .then(() => console.log('Copied to clipboard'))
    .catch(err => console.error('Could not copy text: ', err));
});

const userTextCE = document.getElementById("userTextC");
const offsetE = document.getElementById("offset");
const cipheredE = document.getElementById("ciphered")
 

document.getElementById("bttnC").addEventListener("click", function(){
  const userTextC = userTextCE.value;
  /* parseInt convierte string a número sino el offset no f(na)*/
  const offset = parseInt(offsetE.value);
  
  
  const answer = cipher.encode(userTextC,offset)
  cipheredE.innerHTML = answer;
})    

/*
█▀▀▄ █▀▀ █▀▀ █▀▀  ▀  █▀▀ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ 
█  █ █▀▀ ▀▀█ █    █  █▀▀ █▄▄▀ █▄▄█ █  █ █  █ 
▀▀▀  ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀   ▀ ▀▀ ▀  ▀ ▀▀▀  ▀▀▀▀
*/

const copyDE = document.getElementById("copyD");

copyDE.addEventListener("click", function(){
  const copyText= userTextDE.value;
  navigator.clipboard.writeText(copyText)
    .then(() => console.log('Copied to clipboard'))
    .catch(err => console.error('Could not copy text: ', err));
});

const userTextDE = document.getElementById("userTextD");
const offset2E = document.getElementById("offset2");
const decipheredE = document.getElementById("deciphered")
 
document.getElementById("bttnD").addEventListener("click", function(){
  const userTextD = userTextDE.value;
  const offset2 = parseInt(offset2E.value);
  const userTextDArr = userTextD.split("");
  const answer2 = cipher.decode(userTextDArr,offset2) 
  decipheredE.innerHTML = answer2

})
    

    

    