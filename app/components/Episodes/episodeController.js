import EpisodeService from "./episodeService.js";

let _es = new EpisodeService()

function drawEpisodes() {
  let episodes = _es.Episodes
  let template = ''
  episodes.forEach(e => {
    template += e.Template
  })
  document.getElementById('episodes').innerHTML = template
}

function drawTab() {
  let template = ` <div class="row">
    <div class="col text-center">
      <button onclick="app.controllers.ec.changePage(-1)">Prev</button>
      <button onclick="app.controllers.ec.changePage(1)">Next</button>
    </div>
  </div>

    <div class="row" id="episodes"></div>

    <div class="row">
      <div class="col text-center">
        <button onclick="app.controllers.ec.changePage(-1)">Prev</button>
        <button onclick="app.controllers.ec.changePage(1)">Next</button>
      </div>
    </div>
    `
  document.getElementById('chosen-tab').innerHTML = template
}


export default class EpisodeController {
  constructor() {
    _es.addSubscribers('episodes', drawEpisodes)
  }
  drawEpisodesTab() {
    drawTab()
    _es.getEpisodes()
  }

  changePage(num) {
    _es.changePage(num)
  }
}