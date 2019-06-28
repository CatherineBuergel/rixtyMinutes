export default class Episode {
  constructor(data) {
    // debugger
    this.id = data.id
    this.name = data.name
    this.air_date = data.air_date
    this.episode = data.episode

  }

  get Template() {
    return `
     <div class="col-3">
      <div class="card">
        <div class="card-body">
          <h3>Episode:</h3>
          <h5 class="card-title">Name: ${this.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Episode Number: ${this.episode}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Air Date: ${this.air_date}</h6>
        </div>
      </div>
    </div>
    `
  }
}