const DOMAINS = document.getElementById("allDomains");
window.onload = function() {
  let pronoun = ["the","my","your"];
  let adj = ["Best","Good","Ugly"];
  let noun = ["Mofongo","Monkey","Cabinet"];
  let extensions = ["net","key","go"];
  let domainList = "";
  //We cycle through all pronouns, adjetives, nouns and extensions to print all possible combinations
  for (let itemPronoun of pronoun){
    for (let itemAdj of adj){
      for (let itemNoun of noun){
        for (let itemExtensions of extensions){
          if (domainList != ""){
            domainList += " | ";
          }
          //We check if the extension matches the ending of the nouns and if it does we skip it to do the play of words with the extension
          if (itemNoun.slice(-itemExtensions.length) == itemExtensions){
            domainList += itemPronoun + itemAdj + itemNoun.slice(0,itemNoun.length - itemExtensions.length) + "." + itemExtensions + " | ";
            console.log(itemPronoun + itemAdj + itemNoun.slice(0,itemNoun.length - itemExtensions.length) + "." + itemExtensions);
          }
          domainList += itemPronoun + itemAdj + itemNoun + "." + itemExtensions;
          console.log(itemPronoun + itemAdj + itemNoun + "." + itemExtensions);
        }
      }
    }
  }
  DOMAINS.innerHTML = domainList;
};