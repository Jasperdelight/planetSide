import { get } from "mongoose";
import BaseController from "../utils/BaseController.js";
import { planetsService } from "../services/PlanetsService.js";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getPlanets)
      // .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPlanet)

  }
  async createPlanet(req, res, next) {
    try {
      const planetData = req.body
      const newPlanet = await planetsService.createPlanet(planetData)
      return res.send(newPlanet)
    } catch (error) {
      next(error)
    }

  }
  async getPlanets(req, res, next) {
    try {
      const planets = await planetsService.getPlanets()

      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}