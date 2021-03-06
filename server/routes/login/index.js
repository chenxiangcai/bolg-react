const { User, validateLogin } = require('../../model/User')
const bcrypt = require('bcrypt')
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/key')
module.exports = async (req, res) => {
    console.log(req.fields)
    const { error } = validateLogin(req.fields)
    if (error) {
        return res.send({
            meta: { status: 400, message: error.message }
        })
    }
    const user = await User.findOne({ userID: req.fields.userID })
    if (!user) {
        return res.send({
            meta: { status: 400, message: '账号或密码错误！' }
        })
    }
    if (!await bcrypt.compare(req.fields.userPassword, user.userPassword)) {
        return res.send({
            meta: { status: 400, message: '账号或密码错误！' }
        })
    }

    // 根据用户的身份进行返回 跳转不同的首页
    var path = {}
    if (user.role === 'admin') path = { name: 'adminHome' }
    else path = { name: 'home' }

    // 使用密钥对token加密生成 返回客户端
    const { _id, name } = user
    const token = jwt.sign({ _id, name }, secret, { expiresIn: '24h' })
    const userInfo = _.pick(user, ['role','_id', ])
    res.send({ token, path, userInfo, meta: { status: 200, message: '登录成功' } })
}
