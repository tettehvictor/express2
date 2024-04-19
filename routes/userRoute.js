const express = require('express')
const { getAllUser, getSingleUser, CreateAUser, UpdateAUser, DeleteAUser } = require('../controllers/userController')
const router = express.Router()




router.get('/users', getAllUser)
router.get('/users/:id', getSingleUser)
router.post('/users', CreateAUser)
router.put('/users/:id',UpdateAUser)
router.delete('/users/:id', DeleteAUser)





module.exports = router