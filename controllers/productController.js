exports.getAllProducts = (req, res) => {
    res.status(200)
    res.json([
        {
            productName: 'iphone 11',
            productPrice: '$1200'
        },
        {
            productName: 'iphone 12',
            productPrice: '$2400'
        },
        {
            productName: 'iphone 13',
            productPrice: '$1100'
        }
    ])
}


exports.getSingleProduct = (req, res) => {
    res.status(200)
    res.json({
    productName: "iphone 11",
    productPrice: "$1300"  
 })

}
exports.CreateAProduct = (req,res) => {
    res.status(200)
    res.json({
        message: 'product added successfully'
    })
}
exports.UpdateAProduct =  (req,res) => {
    res.status(200)
    res.json({
        message: 'product updated successfully'
    })
}

exports.DeleteAproduct = (req, res) => {
    res.status(200)
    res.json({
        message: 'product removed sucessfully'
    })
}