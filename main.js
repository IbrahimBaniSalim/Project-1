//to load game direct when open the page
document.addEventListener('DOMContentLoaded', () => {
  //array of image
  const cardArray = [
    {
      name: 'angular',
      img: 'images/angular.svg'
    },
    {
      name: 'aurelia',
      img: 'images/aurelia.svg'
    },
    {
      name: 'backbone',
      img: 'images/backbone.svg'
    },
    {
      name: 'ember',
      img: 'images/ember.svg'
    },
    {
      name: 'react',
      img: 'images/react.svg'
    },
    {
      name: 'vue',
      img: 'images/vue.svg'
    },
    {
      name: 'angular',
      img: 'images/angular.svg'
    },
    {
      name: 'aurelia',
      img: 'images/aurelia.svg'
    },
    {
      name: 'backbone',
      img: 'images/backbone.svg'
    },
    {
      name: 'ember',
      img: 'images/ember.svg'
    },
    {
      name: 'react',
      img: 'images/react.svg'
    },
    {
      name: 'vue',
      img: 'images/vue.svg'
    }
   
   
  ]

  cardArray.sort(() => 0.5 - Math.random())
  //to Spread image randomly on page 

  const grid = document.querySelector('.myCard')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your carde
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.svg')
      card.setAttribute('data-id', i)
      card.style.margin='3px';
      card.style.width='100px'
      card.style.height='100px'
      card.style.border='1px solid blue'
      card.addEventListener('click', flipCard)
      grid.append(card)
    }
  }

  //check for matches and compare between two images
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    //if not matches
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.svg')
      cards[optionTwoId].setAttribute('src', 'images/blank.svg')
      
    }//if  matches
    else if (cardsChosen[0] === cardsChosen[1]) {
     
      cards[optionOneId].setAttribute('src', 'images/concon.png')
      cards[optionTwoId].setAttribute('src', 'images/concon.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.svg')
      cards[optionTwoId].setAttribute('src', 'images/blank.svg')
      
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
