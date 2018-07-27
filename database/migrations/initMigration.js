
const DB = new MySQL()
DB.query('create database node_base',
  (error, results, fields) => {
    if (error) throw error
    console.log('node_base schema has been created')
  })
