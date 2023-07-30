import { useMyCollection, useCardCollectionIds, getMyCards } from "./cardProvider.js";
import { getCardById } from "./cardProvider.js"
import cardComponent from "./card.js";

const cardListComponent = () => {
  const eventHub = document.querySelector(".container")
  const contentTarget = document.querySelector("#card-list-container")

  // getMyCards()
  const collectionById = useCardCollectionIds()
  console.log(collectionById)
  getCardById(collectionById)
  const collection = useMyCollection()
  console.log(collection)


  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "show_collection_button") {
      console.log("button check")
      clickEvent.preventDefault()
      console.log(collection)
      render(collection)

    }

  })



  const render = (card) => {
    contentTarget.innerHTML = card.map((element) => {
      return cardComponent(element)
    })
  }

}

export default cardListComponent