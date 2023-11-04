const { AuthModel } = require('../models/auth')


const Login = async () => { }


const Register = async (req, res) => {
    console.log(req.body)

    const {Name,Email,UserName,Password} = req.body;
}


module.exports = {
    Register
}