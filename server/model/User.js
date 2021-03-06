const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');
//用户集合规则
const userSchema = new mongoose.Schema({
    userID:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 4
    },
    userPassword:{
        type: String,
        required: true,
        minlength: 2
    },
    role:{
        type: String,
        default: 'normal',
        enum: ['admin','waiter','chef']
    },
    joinTime:{
        type: Date,
        default: Date.now
    },
    status:{ //默认1 激活 ,0未激活
        type: Number,
        required: true,
        default: 1,
    }
},{versionKey:false}) //忽略增加的文档在数据库中的__v字段

const User = mongoose.model('User',userSchema);

//初始化管理员
User.findOne({userID:1}).then( async result =>{
    if(result == null){
        // 密码加密
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash('111',salt);
        await User.create({
            userID:1,
            name:'陈相材',
            userPassword: hashPassword,
            role: 'admin',
            status: 1
        })
    }
})

//用户注册验证
const validateUser = user =>{
    const Schema = {
        userID:Joi.number().error(new Error('账号只能为纯数字！')),
        name: Joi.string().required().min(2).max(4).error(new Error('请输入您的正确姓名！')),
        userPassword:Joi.string().required().regex(/^[0-9a-zA-Z]{3,20}$/).error(new Error('请输入2-7位的密码！')),
        status:Joi.number().valid(0,1),
        role:Joi.string().valid('admin','waiter','chef')
    }
    return Joi.validate(user,Schema,{
        abortEarly: false,   //把所有错误检测完再返回
        allowUnknown:true   //允许对象包含被忽略的未知键
    })
}

//用户登录格式验证
const validateLogin = user =>{
    const Schema = {
        userID: Joi.string().regex(/^[0-9]*$/).required().error(new Error('账号或密码错误')),
        userPassword: Joi.string().regex(/^[a-zA-Z0-9]{2,7}$/).error(new Error('账号或密码错误'))
    }
    return Joi.validate(user,Schema,{
        abortEarly: true    //出现错误立即返回
    })
}

module.exports = {
    User,validateUser,validateLogin
}
