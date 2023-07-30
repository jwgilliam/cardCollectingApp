// build methods to get, save from api, delete from local database, and get from local database as well

let cards = []
let myCollection = []
let cardCollectionIds = []


export const useMyCollection = () => {
  return myCollection
}

export const useSearchedCards = () => {
  return cards
}

export const setCards = (searchedCards) => {
  cards = searchedCards.slice()
}

export const setCollection = (storedCards) => {
  // myCollection = storedCards.slice()
  myCollection = storedCards
  console.log(myCollection)
}

const setCardCollectionIds = (cardArray) => {
  cardCollectionIds = cardArray
}

export const useCardCollectionIds = () => {
  return cardCollectionIds
}

export const getCards = (cardSearch) => {
  return fetch(`https://api.pokemontcg.io/v2/cards?q=name:"${cardSearch}"`)
    .then(response => response.json())
    .then(parsedCards => {
      setCards(parsedCards.data)


    })

}

export const saveCard = (card) => {
  return fetch("http://localhost:8088/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(card)
  })
}

export const deleteCard = (cardId) => {
  return fetch(`http://localhost:8088/cards/${cardId}`, {
    method: "DELETE"
  }).then(getCards)
}

export const getMyCards = () => {
  return fetch(`http://localhost:8088/cards`)
    .then((response) => response.json())
    .then(parsedCards => {
      setCardCollectionIds(parsedCards)
      console.log(cardCollectionIds)
    })
}

export const getCardById = (cardIds) => {
  let foundCardIds = []
  cardIds.map((element) => {
    fetch(`https://api.pokemontcg.io/v2/cards?q=id:"${element.id}"`)
      .then(response => response.json())
      .then(parsedCards => {
        foundCardIds.push(parsedCards.data[0])
      })

  },



  )

  setCollection(foundCardIds),
    console.log(foundCardIds)

}