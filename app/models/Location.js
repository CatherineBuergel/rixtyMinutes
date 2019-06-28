export default class Location {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.dimension = data.dimension
    this.type = data.type
  }

  get Template() {
    return `
    <div class="col-3">
      <div class="card">
        <div class="card-body">
          <h3>Location:</h3>
          <h5 class="card-title">Name: ${this.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Dimension: ${this.dimension}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Type: ${this.type}</h6>
        </div>
      </div>
    </div>
    `
  }
}