
expandedButton = false;
expandedButtonLives = false;

function OnClickPairsOfCardsButton() {

  expandedButton = !expandedButton;
  console.log(expandedButton)

  var pairsOfCardsButton = document.getElementById("pairsOfCardsButton");
  var optionsCards = document.getElementById("optionsCards");
  var quantOfLivesButton = document.getElementById("quantOfLivesButton");

  if (expandedButton) {
    pairsOfCardsButton.style.setProperty("--buttonHeight", "calc(var(--responsiveUnit) * 15)");
    optionsCards.style.setProperty("--optionsCardsHeight", "calc(var(--responsiveUnit) * 13)");
    quantOfLivesButton.style.setProperty("--buttonHeight", "calc(var(--responsiveUnit) * 1.5)");

    expandedButtonLives = false;
  } else {
    pairsOfCardsButton.style.setProperty("--buttonHeight", "calc(var(--responsiveUnit) * 1.5)");
    optionsCards.style.setProperty("--optionsLivesHeight", "calc(var(--responsiveUnit) * 0)");
  }
}

function QuantPairsOfCardsButton(cardNumber) {

  var selectedOption = document.getElementById('borderOptionsCards' + cardNumber);
  var selectedText = selectedOption.querySelector('span').innerText;


  console.log('Texto selecionado:', selectedText);
  localStorage.setItem("NumberOfPairs", selectedText);

}
function OnClickQuantOfLivesButton() {

  expandedButtonLives = !expandedButtonLives;
  console.log(expandedButtonLives)

  var optionsLives = document.getElementById("optionsLives");
  var quantOfLivesButton = document.getElementById("quantOfLivesButton");
  var pairsOfCardsButton = document.getElementById("pairsOfCardsButton");

  if (expandedButtonLives) {
    quantOfLivesButton.style.setProperty("--buttonHeight", "calc(var(--responsiveUnit) * 18)");
    optionsLives.style.setProperty("--optionsLivesHeight", "calc(var(--responsiveUnit) * 15)");
    pairsOfCardsButton.style.setProperty("--buttonHeight", "calc(var(--responsiveUnit) * 1.5)");
    expandedButton = false;
  } else {
    quantOfLivesButton.style.setProperty("--buttonHeight", "calc(var(--responsiveUnit) * 1.5)");
    optionsLives.style.setProperty("--optionsLivesHeight", "calc(var(--responsiveUnit) * 0)");
  }
}
