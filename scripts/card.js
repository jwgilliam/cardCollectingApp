const cardComponent = (card) => {
  return `
<div class ="card_box">
<div class="card_picture">
    <img class="card_art"src="${card.images.small}">
    </div>
<div class="card_name">${card.name}</div>
<div class="card_type">${card.types}</div>
<button class="button" id="save_card--${card.id}">Add</button>

</div>
`
}

export default cardComponent