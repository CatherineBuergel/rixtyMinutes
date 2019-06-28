import CharacterService from './characterService.js'

let _cs = new CharacterService()

function drawAllCharacterPage() {
  let template =
    `
    <div class="row">
    <div class="col text-center">
      <button onclick="app.controllers.cc.changePage(-1)">Prev</button>
      <button onclick="app.controllers.cc.changePage(1)">Next</button>
    </div>
   </div>

  <div class="row" id="characters"></div>

  <div class="row">
    <div class="col text-center">
      <button onclick="app.controllers.cc.changePage(-1)">Prev</button>
      <button onclick="app.controllers.cc.changePage(1)">Next</button>
    </div>
  </div>

  `
  document.getElementById('chosen-tab').innerHTML = template

}
function drawCharacters() {
  let characters = _cs.Characters
  let template = ''
  characters.forEach(c => {
    template += c.Template
  })
  document.getElementById('characters').innerHTML = template
}




export default class CharacterController {
  constructor() {
    _cs.addSubscriber('characters', drawCharacters)
    // _cs.getCharacters()
  }
  changePage(num) {
    _cs.changePage(num)
  }

  drawAllCharacters() {
    drawAllCharacterPage()
    _cs.getCharacters()
  }

}