// build methods to get, save from api, delete from local database, and get from local database as well

let cards = []
let myCollection = []


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
  myCollection = storedCards.slice()
}

export const getCards = () => {
  return fetch("")
}

export const saveCard = (cardId) => {
  return fetch(`http://localhost:8088/cards/${cardId}`)
}

export const deleteCard = (cardId) => {

}

export const getMyCards = (cardArray) => {

}