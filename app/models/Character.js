export default class Character {
  constructor(data) {
    this.name = data.name
    this.id = data.id
    this.species = data.species
    this.status = data.status
    this.gender = data.gender
    this.image = data.image
    this.location = data.location || data.location.url

  }

  get Template() {
    return `
    
 <div class="col-3">
      <div class="card">
        <img src="${this.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.species} -- ${this.status}</p>
          
        </div>
      </div>
    </div>
    `
  }
}




// {
//   "info": {
//     "count": 394,
//       "pages": 20,
//         "next": "https://rickandmortyapi.com/api/character/?page=2",
//           "prev": ""
//   },
//   "results": [
//     {
//       "id": 1,
//       "name": "Rick Sanchez",
//       "status": "Alive",
//       "species": "Human",
//       "type": "",
//       "gender": "Male",
//       "origin": {
//         "name": "Earth",
//         "url": "https://rickandmortyapi.com/api/location/1"
//       },
//       "location": {
//         "name": "Earth",
//         "url": "https://rickandmortyapi.com/api/location/20"
//       },
//       "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//       "episode": [
//         "https://rickandmortyapi.com/api/episode/1",
//         "https://rickandmortyapi.com/api/episode/2",
//         // ...
//       ],
//       "url": "https://rickandmortyapi.com/api/character/1",
//       "created": "2017-11-04T18:48:46.250Z"
//     },
//     // ...
//   ]
// }