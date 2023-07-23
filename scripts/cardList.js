import { useMyCollection, useCardCollectionIds } from "./cardProvider.js";
//import { getCardById } from "./cardProvider.js"
import cardComponent from "./card.js";

const cardListComponent = () => {
  const eventHub = document.querySelector(".container")
  const contentTarget = document.querySelector("#card-list-container")

  const collection = useMyCollection
  // getCardById(collection)
  const collectionById = useCardCollectionIds

  eventHub.addEventListener("showCollectionButtonClicked", () => {
    {
      render(collectionById)
    }
  })


  const render = (card) => {
    contentTarget.innerHTML = card.map((element) => {
      return cardComponent(element)
    })
  }

}

export default cardListComponent