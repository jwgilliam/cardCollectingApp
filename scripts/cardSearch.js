// import get method from provider 
import { getCards } from "./cardProvider.js"

// write wrapper function? 
export const cardSearchComponent = () => {
  //contentTarget and eventHub
  const contentTarget = document.querySelector(".card-search-container")
  const eventHub = document.querySelector(".container")

  //click events for search button using get method
  eventHub.addEventListener("click", clickEvent => {
    // using get cards, sending request to api, setting array to equal search results 
    if (clickEvent.target.id === "search_button") {
      const message = new CustomEvent("searchButtonClicked")
      const query = document.querySelector("#search_input").value
      getCards(query)
        .then(eventHub.dispatchEvent(message))

    }
  })

  // 


  //render the search from 
  const render = () => {
    contentTarget.innerHTML = `
    <div class="search_bar_div">
    <input type="text" isRequired id="search_input"/>
    <button id="search_button">Search</button>
    </div>
    `
  }

  render()
}

// export wrapper function 

export default cardSearchComponent