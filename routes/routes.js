import express from 'express'
let router = express.Router()

import HomeController from '../http/controllers/HomeController'
import UsersController from '../http/controllers/UsersController'
import Init from './migrations/init'
const InitMigration = new Init()
const UserController = new UsersController()
const HomeControllers = new HomeController()



router.get('/', HomeControllers.index)
router.get('/users', UserController.users)
router.post('/user/create', UsersController.create)


/*  Migrations  */
router.get('/migrate', InitMigration.index)

export default router