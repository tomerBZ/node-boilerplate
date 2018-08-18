import mysql from 'mysql'
import util from 'util'

export default class MySQL {
  constructor () {
    this.host     = process.env.DB_HOST
    this.user     = process.env.DB_USER
    this.password = process.env.DB_PASS

    this.dbConnection = mysql.createPool({
      host: this.host,
      user: this.user,
      password: this.password,
      database: 'node_base',
    })

    this.dbConnection.getConnection((err, connection) => {
      if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
        }
      }
      if (connection) connection.release()
    })
    this.dbConnection.query = util.promisify(this.dbConnection.query)
  }

  async insert (to, data) {

    if (typeof to !== 'string' || to === '') {
      throw new Error('You have to sully database name')
    }
    try {
      return await this.dbConnection.query(`INSERT INTO ${to} SET ?`, data)
    } catch (error) {
      console.error(error)
    }
  }
}