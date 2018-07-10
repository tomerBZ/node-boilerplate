import User from '../../models/User'
import MySQL from '../../database/MySQL'
import ControllerInterface from '../../interfaces/ControllerInterface'

export default class UsersController extends ControllerInterface {
  constructor () {
    super()
  }

  index (req, res, next) {
    let users = [
      new User('James Coonce', 'jcoonce', 'none@none.com'),
      new User('Bob Coonce', 'bcoonce', 'none@none.com'),
      new User('Euri', 'euri', 'none@none.com'),
      new User('Norman', 'jcoonce', 'none@none.com'),
    ]
    res.json(users)
  }

  users (req, res, next) {
    let users = [
      new User('James Coonce', 'jcoonce', 'none@none.com'),
      new User('Norman', 'jcoonce', 'none@none.com'),
      new User('Euri', 'euri', 'none@none.com'),
    ]
    res.json(users)
  }

  static create (request, response, next) {
    const DB = new MySQL()
    const user = new User(request.body.name, request.body.email, request.body.password)
    DB.insert('tests', user).then((rows) => {
      response.json(user)
    }).catch((error) => {
      response.status(406).json(JSON.parse(error.message))
    })
  }

}