// const Sequelize = require('sequelize')
// const db = new Sequelize('postgres://localhost/first-contact', {logging: false})

// const Contact = db.define('contacts', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   phone: {
//     type: Sequelize.STRING
//   },
//   email: {
//     type: Sequelize.STRING,
//     validate: {
//       isEmail: true
//     }
//   },
//   imageUrl: {
//     type: Sequelize.STRING
//   }
// })

// module.exports = {
//   db,
//   Contact
// }

module.exports = {
  students: [
    {id: 0, name: 'Julia', school: 'Fullstack Academy of Code', course: 'Immersive'},
    {id: 1, name: 'Alexandra', school: 'Booth School of Business', course: 'MBA'},
    {id: 2, name: 'Brian', school: 'Georgia Institute of Technology', course: 'MS Data Analytics'},
    {id: 3, name: 'Lorraine', school: 'UC Davis School of Medicine', course: 'MD'},
    {id: 4, name: 'Lara', school: 'London School of Economics', course: 'MA Media and Communications'}
  ]
}
