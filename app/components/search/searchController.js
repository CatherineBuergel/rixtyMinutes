import SearchService from './searchService.js'

let _ss = new SearchService()

function drawForm() {
  let template =
    `
    <form onsubmit="app.controllers.sc.search(event)">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="categories">Options</label>
          </div>
          <select class="custom-select" id="categories">
            <option selected>Choose...</option>
            <option value="location">location</option>
            <option value="character">character</option>
            <option value="episode">episode</option>
          </select>
        </div>
        <input type="text" name="searchParam" placeholder="what would you like to search for>">
        <button type="submit">Submit</button>
      </form>
  `
  document.getElementById('chosen-tab').innerHTML = template
}

function drawCharacter() {
  let character = _ss.Character
  let template = character.Template
  document.getElementById('search-results').innerHTML += template
}
function drawLocation() {
  let location = _ss.Location
  let template = location.Template
  document.getElementById('search-results').innerHTML += template
}
function drawEpisode() {
  let episode = _ss.Episode
  let template = episode.Template
  document.getElementById('search-results').innerHTML += template
}



export default class searchController {
  constructor() {
    _ss.addSubscribers('character', drawCharacter)
    _ss.addSubscribers('episode', drawEpisode)
    _ss.addSubscribers('location', drawLocation)
  }
  search(event) {
    event.preventDefault()
    let category = document.getElementById("categories").value;
    let form = event.target
    let userSearch = {
      category: category.toLowerCase(),
      searchParam: form.searchParam.value
    }
    _ss.search(userSearch)
  }
  drawSearchForm() {
    drawForm()
  }
}