const cipher = {
 
  /*
  █▀▀  ▀  █▀▀ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ 
  █    █  █▀▀ █▄▄▀ █▄▄█ █  █ █  █ 
  ▀▀▀ ▀▀▀ ▀   ▀ ▀▀ ▀  ▀ ▀▀▀  ▀▀▀▀
 */
  encode:(userTextC,offset)=>{
    console.log(userTextC,typeof userTextC)
    console.log(offset,typeof offset)

  
      if (userTextC=== undefined || offset===undefined){
        throw new TypeError ("ERROR")
      } else if(userTextC=== typeof 0 || offset===0){
        throw new TypeError ("ERROR")
      }

    const userTextCArr = userTextC.toString().split("");
    console.log(userTextCArr)
    /* CICLO CON MAP*/
    /* const codedArr=> array para, con push, agregar textCoded 
  fuera del ciclo y que se muestre en la pg web */  
    const codedArr=[];
    userTextCArr.map(letter => {
      console.log(letter)
      const asciiValue = letter.charCodeAt(0);
      console.log(asciiValue)
      let codedValue;
      /* letras mayúsculas*/
      if ( asciiValue >= 65 && asciiValue <=90){
        codedValue = (asciiValue -65 + offset)%26+65; 
        console.log(codedValue)
        /* letras minúsculas*/
      } else if (asciiValue >= 97 && asciiValue <=122){
        codedValue = (asciiValue -97 + offset)%26+97;
        console.log(codedValue)
        /* números*/
      } else if (asciiValue >= 48 && asciiValue <=57){
        codedValue = (asciiValue -48 + offset)%10+48;
        console.log(codedValue)
      }else {
        codedValue=asciiValue;
        console.log(codedValue)
      }
      const textCoded = String.fromCharCode(codedValue); 
      console.log(textCoded)
      codedArr.push(textCoded);
      //   return textCoded;
    }); 
 
    console.log(codedArr)
    console.log(codedArr.join(""))
      /* sea grega join ya que al cifrar mensaje se cambio string a array, join lo 
      vuelve a convertir en string*/
      return codedArr.join("");
      
  },


  /*
█▀▀▄ █▀▀ █▀▀ █▀▀  ▀  █▀▀ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ 
█  █ █▀▀ ▀▀█ █    █  █▀▀ █▄▄▀ █▄▄█ █  █ █  █ 
▀▀▀  ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀   ▀ ▀▀ ▀  ▀ ▀▀▀  ▀▀▀▀
*/
  decode:(userTextD,offset2)=>{
    console.log(userTextD,typeof userTextD)
    console.log(offset2,typeof offset2)

    const userTextDArr = userTextD.toString().split("");
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
    /* offset.length >0 se cambió a !isNaN(offset), ya que anteriormente el 
      offset se cambio de string a number con parsInt y length funciona solo con string*/
    if (userTextDArr.length >0 && !isNaN(offset2)){
      return decodedArr.join("");
    } else {
      return "Por favor escriba mensaje" ; 
    } 
  }
};
export default cipher;