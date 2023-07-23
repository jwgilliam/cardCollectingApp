// import useCards from data provider
import { useSearchedCards, saveCard, getCards } from "./cardProvider.js"
import cardComponent from "./card.js"

// wrapper functoin 
const cardSearchList = () => {
  const eventHub = document.querySelector(".container")
  const contentTarget = document.querySelector("#card-list-container")

  //add event listener for searchButtonClicked
  eventHub.addEventListener("searchButtonClicked", (event) => {
    //console.log("button check 1")
    let searchedCards
    getCards(event.detail.cardSearch).then(() => {
      searchedCards = useSearchedCards()
      //console.log(searchedCards)
      render(searchedCards)
    })

    // console.log(searchedCards)

  })






  //map function to render searched cards (render)
  const render = (cards) => {
    contentTarget.innerHTML =
      cards.map((card) => {
        return cardComponent(card)
      }).join("")


  }


}

export default cardSearchList