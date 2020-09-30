function reverseOnlyAlphabetical(str) {
  let reversed = '';
  let letters = [];
  let reversedLetters = [];
  let regex = RegExp(/([a-zA-Z])/);
  //loop through string and pull out letters
  for(let i = 0; i < str.length; i++){
  	if(regex.test(str[i])){
      letters.push(str[i]);
    } 
  }
  //reverse letters
  for(let i = letters.length-1; i >= 0; i--){
  	reversedLetters.push(letters[i]);
  }
  //loop through original string and add reverse letters where there is a letter
  let counter = 0;
  for(let i = 0; i < str.length; i++){
  	if(regex.test(str.charAt(i))){
      reversed += reversedLetters[counter];
      counter++;
    }else{
    	reversed += str[i];
    }
  }
  return reversed;
}