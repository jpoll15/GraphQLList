const express = require('express')
const router = express.Router()
const {Student, School} = require('./Sequelize.js')

// some RESTful routes
router.get('/api/students', async (req, res, next) => {
  try {
    const students = await Student.findAll()
    res.json(students)
  } catch (err) {
    next(err)
  }
})

router.get('/api/students/:id', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id)
    res.json(student)
  } catch (err) {
    next(err)
  }
})

router.get('/api/students/:id', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id, {
      include: [School]
    })
    res.json(student)
  } catch (err) {
    next(err)
  }
})

router.get('/api/students/:schoolId', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      where: {
        schoolId: req.params.schoolId
      }
    })
    res.json(students)
  } catch (err) {
    next(err)
  }
})

router.get('/api/schools/:id', async (req, res, next) => {
  try {
    const school = await School.findById(req.params.id)
    res.json(school)
  } catch (err) {
    next(err)
  }
})

router.get('/api/students/:id/school/students', async (req, res, next) => {
  try {
    const {schoolId} = await Student.findById(req.params.id, {
      attributes: ['schoolId']
    })
    const fellowStudents = await Student.findAll({
      where: {schoolId}
    })
    res.json(fellowStudents)
  } catch (err) {
    next(err)
  }
})
