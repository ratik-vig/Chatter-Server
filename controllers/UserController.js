const express = require('express')
const StudentServices = require('../services/UserServices')

const router = express()

router.get('/', StudentServices.logStudentHome)
router.post('/create', StudentServices.registerUser)
module.exports = router