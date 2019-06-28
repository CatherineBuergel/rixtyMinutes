import CharacterController from './components/characters/characterController.js'
import SearchController from './components/search/searchController.js';
import EpisodeController from './components/Episodes/episodeController.js';


class App {
  constructor() {
    // debugger
    this.controllers = {
      cc: new CharacterController(),
      sc: new SearchController(),
      ec: new EpisodeController()
    }
  }
}


window['app'] = new App();