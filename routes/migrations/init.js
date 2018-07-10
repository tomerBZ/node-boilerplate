import MySQL from '../../database/MySQL'

export default class Init {
  constructor () {}
  index(req, res, next) {
    const DB = new MySQL()
    DB.query('CREATE SCHEMA IF NOT EXISTS node_base',
      (error, results, fields) => {
        if (error) throw error
        res.json(results);
      })
  }
}