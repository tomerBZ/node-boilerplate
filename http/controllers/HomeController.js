import ControllerInterface from '../../interfaces/ControllerInterface'
import MySQL from '../../database/MySQL'

export default class HomeController extends ControllerInterface {
  constructor () {
    super()
  }

  index (req, res, next) {
    const data = {title: 'My Title'}
    return res.render('index.ejs', data)
  }
}