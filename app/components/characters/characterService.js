import Character from "../../models/Character.js"

let _api = new axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character/'
})

let pageNumber = 1

let _state = {
  characters: []
}

let _subscribers = {
  characters: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

export default class characterService {
  constructor() {
    console.log("service created")
  }
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Characters() {
    return _state.characters.map(c => new Character(c))
  }

  getCharacters() {
    _api.get('')
      .then(res => {
        console.log(res.data.results)
        let characters = res.data.results.map(c => new Character(c))
        _setState('characters', characters)
      })
      .catch(err => {
        console.error(err)
      })
  }

  changePage(num) {
    if (pageNumber == 1 && num < 1) {
      return
    }
    pageNumber += num
    _api.get('?page=' + pageNumber)
      .then(res => {
        let characters = res.data.results.map(c => new Character(c))
        _setState('characters', characters)
      })
      .catch(err => {
        console.error(err)
      })
  }


}