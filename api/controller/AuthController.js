const { AuthModel } = require('../models/auth')
const bcrypt = require('bcryptjs');
const logger = require('../config/logger')
const Log = require('../models/logModel');
const session = require('express-session');
const jwt = require('jsonwebtoken');


const Login = async (req, res) => {
    console.log(req.body)
    const { UserName, Password } = req.body;


    const isUser = await AuthModel.findOne({ UserName: UserName })
    console.log(isUser)

    const pass = await bcrypt.compareSync(Password, isUser.Password)
    console.log(pass)

    if (!isUser || !pass) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
    }

    req.session.user = isUser;


    const logEntry = new Log({
        timestamp: new Date(),
        level: 'info',
        message: `${req.method} ${req.originalUrl} User Name ${isUser.UserName}`,
    });

    logEntry.save()


    logger.info(isUser.UserName + ' Login');

    const token = jwt.sign({ id: isUser.id, username: isUser.UserName }, 'your-secret-jwt-key');
    res.json({ token, isUser });

}

const AllUsers = async (req, res) => {

    const users = await AuthModel.find();

    const logEntry = new Log({
        timestamp: new Date(),
        level: 'info',
        message: `${req.method} ${req.originalUrl} All Users Request ${req.ip}`,
    });

    logEntry.save()
    logger.info(req.ip + ' All Users');


    res.send(users)
}


const Register = async (req, res) => {
    console.log(req.body)

    const { Name, Email, UserName, Password } = req.body;
    const hashedPassword = await bcrypt.hash(Password, 10);

    const isUserNameExit = AuthModel.findOne({ UserName: UserName });
    const isEmailExist = AuthModel.findOne({ Email: Email })

    if (!isUserNameExit) {
        return res.status(400).json({ error: 'UserName already used' });
    }
    if (!isEmailExist) {
        return res.status(400).json({ error: 'Email already used' });
    }
    const newUser = AuthModel({
        Name,
        Email,
        UserName,
        Password: hashedPassword
    })
    newUser.save();

    const logEntry = new Log({
        timestamp: new Date(),
        level: 'info',
        message: `${req.method} ${req.originalUrl} User Name ${UserName}`,
    });

    logEntry.save()


    logger.info(UserName + ' Register to The Database');

    res.send({ 'message': 'User Save Successfully', newUser })
}


module.exports = {
    Register,
    Login,
    AllUsers
}