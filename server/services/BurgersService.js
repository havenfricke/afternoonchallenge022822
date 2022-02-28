import { dbContext } from "../db/DbContext"
import { logger } from "../utils/Logger"

class BurgersService {

  async removeBurger(burgerId) {
    logger.log('burgerId from user', typeof burgerId)
    const index = dbContext.Burgers.findIndex(b => b.id.toString() === burgerId)
    if (index === -1) {
      throw new Error('no burgers found by that id')
    }
    dbContext.Burgers.splice(index, 1)
    return 'Burger now in stomach, burger good'
  }
  async createBurger(body) {
    const burger = await dbContext.Burgers.push(body)
    return body
  }
  async getAllBurgers() {
    const burgers = await dbContext.Burgers
    return burgers
  }

}
export const burgersService = new BurgersService()