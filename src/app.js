import "bootstrap";
import "./style.css";
import { startTransition } from "react";
window.onload = function() {
  //write your code here
  let pronoun = ["the","my","your"];
  let adj = ["big","good","ugly"];
  let noun = ["opossum","shark","crow"];
  let domain = "";
  for (let itemPronoun of pronoun){
    domain = itemPronoun;
    for (let itemAdj of adj){
      domain = domain + itemAdj;
      for (let itemDomain of pronoun){
        domain = domain + itemDomain;
      }
    }
    console.log(domain);
  }
};
