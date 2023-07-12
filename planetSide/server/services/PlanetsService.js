import { dbContext } from "../db/DbContext.js"

class PlanetsService {

  async createPlanet(planetData) {
    const planet = await dbContext.Planets.create(planetData)
    return planet

  }
  async getPlanets() {
    const planets = await dbContext.Planets.find()
    return planets

  }

}

export const planetsService = new PlanetsService()