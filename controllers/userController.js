exports.getAllUser = (req, res)  => {
    res.status(200)
    res.json([
        {
            userName: 'Tetteh victor',
            userEmail: 'victortetteh2345@gmail.com'
        },
        {
            userName: 'Femi',
            userEmail: 'femiprompt124@gmail.com'
        }
    ])
}
exports.getSingleUser =  (req, res) => {
    res.status(200)
    res.json([
        {
            userName: 'tboy',
            userEmail: 'ope4toy@gmail.com'
        }
    ])
}
exports.CreateAUser = (req,res) => {
    res.status(200)
    res.json({
        message: 'user added successfully'
    })
}
exports.UpdateAUser =  (req,res) => {
    res.status(200)
    res.json({
        message: 'User updated successfully'
    })
}
exports.DeleteAUser= (req, res) => {
    res.status(200)
    res.json({
        message: 'user removed sucessfully'
    })
}