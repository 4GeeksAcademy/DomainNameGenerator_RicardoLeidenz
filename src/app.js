import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the","my","your"];
  let adj = ["Best","Good","Ugly"];
  let noun = ["Mofongo","Monkey","Cabinet"];
  let extensions = ["net","key","go"];
  let domain = "";
  //We cycle through all pronouns, adjetives, nouns and extensions to print all possible combinations
  for (let itemPronoun of pronoun){
    for (let itemAdj of adj){
      for (let itemNoun of noun){
        for (let itemExtensions of extensions){
          //We check if the extension matches the ending of the nouns and if it does we skip it to do the play of words with the extension
          if (itemNoun.slice(-itemExtensions.length) == itemExtensions){
            domain = itemPronoun + itemAdj + itemNoun.slice(0,itemNoun.length - itemExtensions.length) + "." + itemExtensions;
            console.log(domain);
          }
          //Else just print like normal
          else{
          domain = itemPronoun + itemAdj + itemNoun + "." + itemExtensions;
          console.log(domain);
          }
        }
      }
    }
  }
};