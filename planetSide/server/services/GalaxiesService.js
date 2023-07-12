import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
  async createGalaxy(galaxyData) {
    const newGalaxy = await dbContext.Galaxies.create(galaxyData)
    return newGalaxy
  }
  async getGalaxies() {
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }

}
export const galaxiesService = new GalaxiesService()