const Sequelize = require('sequelize')

const db = new Sequelize(
  `postgres://localhost:5432/graphQLcounter`,
  {
    logging: false
  }
)

const Student = db.define('student', {
  name: Sequelize.STRING,
  degree: Sequelize.STRING
})

const School = db.define('school', {
  name: Sequelize.STRING,
  state: Sequelize.STRING,
  type: Sequelize.STRING
})

Student.belongsTo(School)

const fakeStudents = [
  {name: 'Julia', degree: 'Immersive'},
  {name: 'Alexandra', degree: 'MBA'},
  {name: 'Brian', degree: 'MS Data Analytics'},
  {name: 'Lorraine', degree: 'MD'},
  {name: 'Lara', degree: 'MA Media and Communications'},
  {name: 'Nayaab', degree: 'DO'},
  {name: 'Tiffany', degree: 'MD'},
  {name: 'Emily', degree: 'Immersive'},
  {name: 'Priyanka', degree: 'MBA'},
  {name: 'Rafael', degree: 'MS Data Analytics'}
]

const fakeSchools = [
  {name: 'Fullstack Academy of Code', state: 'IL', type: 'coding bootcamp'},
  {name: 'Booth School of Business', state: 'IL', type: 'business school'},
  {name: 'Georgia Institute of Technology', state: 'GA', type: 'technical university'},
  {name: 'NYU Stern School of Business', state: 'NY', type: 'business school'},
  {name: 'UC Davis School of Medicine', state: 'CA', type: 'medical school'},
  {name: 'Weill Cornell Medical College', state: 'NY', type: 'medical school'},
  {name: 'New York College of Medicine', state: 'NY', type: 'medical school'},
  {name: 'London School of Economics', state: 'UK', type: 'research university'}
]

const seed = async () => {
  const newbies = await Student.bulkCreate(fakeStudents, {returning: true})

  const schos = await School.bulkCreate(fakeSchools, {returning: true})

  await Promise.all([
    newbies[0].setSchool(schos[0]),
    newbies[1].setSchool(schos[1]),
    newbies[2].setSchool(schos[2]),
    newbies[3].setSchool(schos[4]),
    newbies[4].setSchool(schos[7]),
    newbies[5].setSchool(schos[6]),
    newbies[6].setSchool(schos[5]),
    newbies[7].setSchool(schos[0]),
    newbies[8].setSchool(schos[4]),
    newbies[9].setSchool(schos[7])
  ])
}

db.sync({force: true})
.then(() => {
  console.log('db synced')
  return seed()
})
.then(() => {
  return Student.findById(1, {
    attributes: ['schoolId']
  })
}).then(({schoolId}) => {
  return Student.findAll({
    where: {schoolId}
  })
})
.then(students => {
  console.log(students)
  return students
})
.then(() => {
  db.close()
  console.log('db connection closed')
})

module.exports = {db, Student, School}
