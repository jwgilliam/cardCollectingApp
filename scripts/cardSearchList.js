// import useCards from data provider
import { useSearchedCards } from "./cardProvider.js"
import cardComponent from "./card.js"

// wrapper functoin 
const cardSearchList = () => {
  const eventHub = document.querySelector(".container")
  const contentTarget = document.querySelector(".card-list-container")

  //add event listener for searchButtonClicked
  eventHub.addEventListener("searchButtonClicked", () => {
    const searchedCards = useSearchedCards()

    render(searchedCards)
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