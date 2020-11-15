const mongoose = require('mongoose');
const Joi = require('joi');

//收入集合
const AccoutsSchema = new mongoose.Schema({
    money:{
        type:Number,
        required:true
    },
    orderID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderFront',
        required:true
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    time:{
        type: Date,
        default: Date.now
    },
    status:{ //默认1 已结账 ,0未结账
        type: Number,
        required: true,
        default: 1,
    }
},{versionKey:false}) //忽略增加的文档在数据库中的__v字段

const Accouts = mongoose.model('Accouts',AccoutsSchema);


//添加验证
const validateAccouts = user =>{
    const Schema = {
        money:Joi.number().required().error(new Error('输入收入！')),
        status:Joi.number().valid(0,1),
    }
    return Joi.validate(user,Schema,{
        abortEarly: false,   //把所有错误检测完再返回
        allowUnknown:true   //允许对象包含被忽略的未知键
    })
}


module.exports = {
    Accouts,validateAccouts
}
