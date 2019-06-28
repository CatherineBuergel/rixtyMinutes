import Character from "../../models/Character.js";
import Location from "../../models/Location.js"
import Episode from "../../models/Episode.js"

let _api = new axios.create({
  baseURL: 'https://rickandmortyapi.com/api/'
})

let _state = {
  location: {},
  episode: {},
  character: {}
}

let _subscribers = {
  location: [],
  episode: [],
  character: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}






export default class searchService {
  constructor() {

  }
  get Character() {
    return new Character(_state.character)
  }

  get Episode() {
    return new Episode(_state.episode)
  }

  get Location() {
    return new Location(_state.location)
  }

  addSubscribers(prop, fn) {
    _subscribers[prop].push(fn)
  }

  sortSearch(userSearch, data) {

    switch (userSearch.category) {
      case 'location':
        console.log(data)
        _setState('location', new Location(data));
        break;
      case 'character':
        console.log(data)
        _setState('character', new Character(data));
        break;
      case 'episode':
        console.log(data)
        _setState('episode', new Episode(data))
        break;
    }
  }


  search(search) {
    _api.get(search.category + '/' + search.searchParam)
      .then(res => {
        console.log(res.data)
        // _setState('results', )
        this.sortSearch(search, res.data)
      })
      .catch(err => console.error(err))
  }


}