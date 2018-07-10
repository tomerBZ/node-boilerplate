export default class User {
  constructor (name, email, password) {
    this.name = name
    this.email = email
    this.password = password
  }
  
  getEmail () {
    return this.email
  }
  
  getName () {
    return this.name
  }

  getPassword () {
    return this.password
  }
}