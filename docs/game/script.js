document.addEventListener('DOMContentLoaded', () => {
  const TITLE = "js gamer ";

  const cards = [

    {
      name: 'css',
      img: '..\assets\images\css-3.png',
    },
    {
      name: 'git',
      img: '..\assets\images\git.png',
    },
    {
      name: 'github',
      img: '..\assets\images\github.png',
    },
    {
      name: 'html',
      img: '..\assets\images\html.png',
    },
    {
      name: 'java',
      img: '..\assets\images\java.png',
    },
    {
      name: 'js',
      img: '..\assets\images\js.png',
    },
    {
      name: 'css',
      img: '..\assets\images\css-3.png',
    },
    {
      name: 'git',
      img: '..\assets\images\git.png',
    },
    {
      name: 'github',
      img: '..\assets\images\github.png',
    },
    {
      name: 'html',
      img: '..\assets\images\html.png',
    },
    {
      name: 'java',
      img: '..\assets\images\java.png',
    },
    {
      name: 'js',
      img: '..\assets\images\js.png',
    },

  ]

  var NumberOfPairs = localStorage.getItem("NumberOfPairs");
  var FlipCard = document.getElementById("flipCard");


  cards.sort(() => 0.5 - Math.random());
  const gridContainer = document.querySelector(".gridContainer");
  const resultView = document.querySelector('#result')

  const cardsChosen = [];
  const idCardsChosen = [];
  const cardsCombination = [];



  function checkForMatch() {

    const cards = document.querySelectorAll('img');
    const optionOneId = idCardsChosen[0];
    const optionTwoId = idCardsChosen[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute('src', '..\assets\images\check.png');
      cards[optionTwoId].setAttribute('src', '..\assets\images\check.png');
      cardsCombination.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', '../../assets/images/board.png');
      cards[optionTwoId].setAttribute('src', '../../assets/images/board.png');
    }

    cardsChosen.length = 0;
    idCardsChosen.length = 0;
    resultView.textContent = cardsCombination.length;
    if (cardsCombination.length === cards.length / 2) {
      resultView.textContent = 'Congratulations! You found them all!';
    }

  }


  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/board.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      gridContainer.appendChild(card)
    }
  }

    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cards[cardId].name)
      idCardsChosen.push(cardId)
      this.setAttribute('src', cards[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }




  createBoard();
  });








// const TITLE = "js gamer ";
// FlipCardGenerate();
// var FlipCardCont = 0;
// function FlipCardGenerate() {


//   var NumberOfPairs = localStorage.getItem("NumberOfPairs");
//   //numero de pares

//   var NumberOfGrids = document.querySelector(".gridContainer");
//   //gridgap
//   //numbergridcolumns

//   var FlipCard = document.getElementById("flipCard");
//   //tamanho
//   //fontsize
//   const cardEx = document.querySelector('.flipCard.ex');
//   console.log(`[${TITLE}] cardEx`, cardEx);

//   var flipCardArray = [];
//   for (var i = 0; i < NumberOfPairs; i++) {

//     const flipCard = cardEx.cloneNode(true);
//     flipCard.classList.remove('ex');
//     flipCard.children[0].children[1].innerText = i;

//     flipCardArray.push(
//       {
//         Element: flipCard,
//         flipped: false,
//         pair: i,
//       },
//       {
//         Element: flipCard.cloneNode(true),
//         flipped: false,
//         pair: i,
//       }
//     )
//   }

//   console.log(`[${TITLE}] flipCardArray`, flipCardArray);
//   flipCardArray.sort(() => Math.random() - 0.5);


//   flipCardArray.forEach((card) => {
//     NumberOfGrids.appendChild(card.Element);
//   });



// }




