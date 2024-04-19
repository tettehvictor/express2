const express = require('express')
const { getAllService, getSingleService, CreateAService, UpdateAService, DeleteAService } = require('../controllers/serviceController')

const router = express.Router()




router.get('/services', getAllService)
router.get('/services/:id', getSingleService)
router.post('/services', CreateAService)
router.put('/services/:id',UpdateAService)
router.delete('/services/:id', DeleteAService)





module.exports = router