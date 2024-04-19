exports.getAllService = (req, res) => {
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


exports.getSingleService = (req, res) => {
    res.status(200)
    res.json({
    productName: "iphone 11",
    productPrice: "$1300"  
 })

}
exports.CreateAService = (req,res) => {
    res.status(200)
    res.json({
        message: 'Service added successfully'
    })
}
exports.UpdateAService =  (req,res) => {
    res.status(200)
    res.json({
        message: 'Service updated successfully'
    })
}

exports.DeleteAService = (req, res) => {
    res.status(200)
    res.json({
        message: 'Service removed sucessfully'
    })
}