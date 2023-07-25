import { useMyCollection, useCardCollectionIds } from "./cardProvider.js";
import { getCardById } from "./cardProvider.js"
import cardComponent from "./card.js";

const cardListComponent = () => {
  const eventHub = document.querySelector(".container")
  const contentTarget = document.querySelector("#card-list-container")

  const collection = useMyCollection
  const collectionById = useCardCollectionIds
  getCardById(collectionById)


  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "show_collection_button") {
      console.log("button check")
      clickEvent.preventDefault()
      console.log(collection())
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