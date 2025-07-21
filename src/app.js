import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the","my","your"];
  let adj = ["Last","Good","Ugly"];
  let noun = ["Mofongo","Monkey","Cabinet"];
  let extensions = ["net","key","go"];
  let domain = "";
  //
  for (let itemPronoun of pronoun){
    for (let itemAdj of adj){
      for (let itemNoun of noun){
        for (let itemExtensions of extensions){
          domain = itemPronoun + itemAdj + itemNoun + "." + itemExtensions;
          console.log(domain);
        }
      }
    }
  }
};
