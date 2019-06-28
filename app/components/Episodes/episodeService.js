import Episode from "../../models/Episode.js"
let _api = new axios.create({
  baseURL: 'https://rickandmortyapi.com/api/episode'
})
let pageNumber = 1
let _state = {
  episodes: []
}

let _subscribers = {
  episodes: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}



export default class EpisodeService {
  constructor() {

  }
  get Episodes() {

    let array = _state.episodes.map(e => new Episode(e))
    return array
  }

  addSubscribers(prop, fn) {
    _subscribers[prop].push(fn)
  }
  getEpisodes() {
    // debugger
    _api.get()
      .then(res => {
        console.log(res.data.results)
        let episodes = res.data.results.map(e => new Episode(e))
        _setState('episodes', episodes)
      })
  }

  changePage(num) {
    if (pageNumber == 1 && num < 1) {
      return
    }
    pageNumber += num
    _api.get('?page=' + pageNumber)
      .then(res => {
        let episodes = res.data.results.map(e => new Episode(e))
        _setState('episodes', episodes)
      })
      .catch(err => {
        console.error(err)
      })
  }
}