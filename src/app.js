const DOMAINS = document.getElementById("allDomains");
let pronoun = ["the", "my", "your"];
let adj = ["Best", "Good", "Ugly"];
let noun = ["Windigo", "Monkey", "Cabinet"];
let extensions = ["net", "key", "go"];
let domainList = "";

window.onload = function () {
  //We cycle through all pronouns, adjetives, nouns and extensions to print all possible combinations
  for (let itemPronoun of pronoun) {
    for (let itemAdj of adj) {
      for (let itemNoun of noun) {
        for (let itemExtensions of extensions) {
          if (domainList != "") {
            domainList += " | ";
          }
          domainList += generateDomain(itemPronoun, itemAdj, itemNoun, itemExtensions);
        }
      }
    }
  }
  DOMAINS.innerHTML = domainList;
};

function generateDomain(domainPronun, domainAdj, domainNoun, domainExtension) {
  let wordplay = "";
  //Compares the last leters on domainNoun to the domainExtension
  if (domainNoun.slice(domainNoun.length - domainExtension.length) == domainExtension) {
    wordplay = domainPronun + domainAdj + domainNoun.slice(0, domainNoun.length - domainExtension.length) + "." + domainExtension;
  }
  if (wordplay.length > 0) return domainPronun + domainAdj + domainNoun + "." + domainExtension + " | " + wordplay;
  return domainPronun + domainAdj + domainNoun + "." + domainExtension;
}