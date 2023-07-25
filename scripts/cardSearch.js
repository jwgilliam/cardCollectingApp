// import get method from provider 
import { useSearchedCards, saveCard } from "./cardProvider.js"

// write wrapper function? 
const cardSearchComponent = () => {
  //contentTarget and eventHub
  const contentTarget = document.querySelector("#card-search-container")
  const eventHub = document.querySelector(".container")

  //click events for search button using get method
  eventHub.addEventListener("click", clickEvent => {
    // using get cards, sending request to api, setting array to equal search results 
    if (clickEvent.target.id === "search_button") {
      // console.log("other button check")
      const query = document.querySelector("#search_input").value
      const message = new CustomEvent("searchButtonClicked", {
        detail: {
          cardSearch: query
        }
      })

      eventHub.dispatchEvent(message)

      // getCards(query)
      //   .then(console.log(useSearchedCards()))
      //   .then(eventHub.dispatchEvent(message))



    }

    if (clickEvent.target.id === "show_collection_button") {
      const message = new CustomEvent("showCollectionButtonClicked")
      eventHub.dispatchEvent(message)
    }

    if (clickEvent.target.id.startsWith("save_card--")) {
      const [prefix, id] = clickEvent.target.id.split("--");
      const newCard = {
        id: id
      }
      console.log(newCard)
      saveCard(newCard);
    }
  })

  // 


  //render the search from 
  const render = () => {
    contentTarget.innerHTML = `
    <div class="search_bar_div">
    <input type="text" isRequired id="search_input"/>
    <button id="search_button">Search</button>
    <button id="show_collection_button">My cards</button>
    </div>
    `
  }

  render()
}

// export wrapper function 

export default cardSearchComponent