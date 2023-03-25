const cipher = {
 
  /*
  █▀▀  ▀  █▀▀ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ 
  █    █  █▀▀ █▄▄▀ █▄▄█ █  █ █  █ 
  ▀▀▀ ▀▀▀ ▀   ▀ ▀▀ ▀  ▀ ▀▀▀  ▀▀▀▀
 */
  encode:(userTextCArr,offset)=>{
  /* CICLO CON MAP*/
  /* const codedArr=> array para, con push, agregar textCoded 
  fuera del ciclo y que se muestre en la pg web */  
  const codedArr=[];
  function Coding(userTextCArr, offset){
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
      return textCoded;
    }); 
    return codedArr.join("");
  }

    /* RESPUESTA EN PG*/
    /* offset.length >0 se cambió a !isNaN(offset), ya que anteriormente el 
      offset se cambio de string a number con parsInt y length funciona solo con string*/
    if (userTextCArr.length >0 && !isNaN(offset)){
      /* sea grega join ya que al cifrar mensaje se cambio string a array, join lo 
          vuelve a convertir en string*/
      return codedArr.join("");
    } else {
      return "Por favor escriba mensaje";
    } 
  },


  /*
█▀▀▄ █▀▀ █▀▀ █▀▀  ▀  █▀▀ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ 
█  █ █▀▀ ▀▀█ █    █  █▀▀ █▄▄▀ █▄▄█ █  █ █  █ 
▀▀▀  ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀   ▀ ▀▀ ▀  ▀ ▀▀▀  ▀▀▀▀
*/
  decode:(userTextDArr,offset2)=>{

    const decodedArr=[]
    userTextDArr.map(letter => {
      const asciiValue = letter.charCodeAt(0);
      let codedValue;
      /* letras mayúsculas*/
      if ( asciiValue >= 65 && asciiValue <=90){
        codedValue = (asciiValue -65-offset2%26+26)%26+65; 
        /* letras minúsculas*/
      } else if (asciiValue >= 97 && asciiValue <=122){
        codedValue = (asciiValue -97-offset2%26+26)%26+97;
        /* números*/
      } else if (asciiValue >= 48 && asciiValue <=57){
        codedValue = (asciiValue -48-offset2%10+10)%10+48;
      }else {
        codedValue=asciiValue;
      }
      const textCoded = String.fromCharCode(codedValue); 
      decodedArr.push(textCoded);
      return textCoded;
    });   

    if (userTextDArr.length >0 && !isNaN(offset2)){
      return decodedArr.join("");
    } else {
      return "Por favor escriba mensaje" ; 
    } 
  }
};
export default cipher;