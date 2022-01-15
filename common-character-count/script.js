function commonCharacterCount(string1, string2) {
let commonCharacterCount = 0
let characterMap ={}

  for(let char of string1){
    if(!characterMap[char]){
      characterMap[char]=true
     } 
  }
  for(let character of Object.keys(characterMap)){
    if(string2.includes(character)){
      commonCharacterCount++
    }
   
  }
  
return commonCharacterCount


}


console.log(commonCharacterCount("adbbcc","abc"))




