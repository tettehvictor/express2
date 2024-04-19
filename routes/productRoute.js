const express = require('express')
const router = express.Router()
const {getAllProducts, getSingleProduct, CreateAProduct, UpdateAProduct, DeleteAproduct} = require("../controllers/productController")






router.get('/products', getAllProducts )

router.get('/products/:id', getSingleProduct)
 
router.post('/products', CreateAProduct)
router.put('/products/:id', UpdateAProduct)
router.delete('/products/:id', DeleteAproduct)


module.exports = router