var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverUrl = "https://api.funtranslations.com/translate/pirate.json";
function errorHandler(error) {
  console.log(error);
  alert("Something went wrong with server! Try again after sometime");
}
function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function clickHandler() {
  var inputText = txtInput.value;
  fetch(getTranslationUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
