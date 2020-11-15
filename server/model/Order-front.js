const mongoose = require('mongoose');
const Joi = require('joi');

//前台 点餐表 集合规则
const orderFrontSchema = new mongoose.Schema({
    tabNumber:{
        type: Number,
        required:[true,'请输入桌号！']
    },
    guestNumber:{
        type: Number,
        required:true
    }
},{versionKey:false}) //忽略增加的文档在数据库中的__v字段

const OrderFront = mongoose.model('OrderFront',orderFrontSchema);

//添加验证
const validateOrderFront = order =>{
    const Schema = {
        tabNumber: Joi.number().required().error(new Error('请输入桌位号！')),
        guestNumber: Joi.number().required().error(new Error('请输入顾客人数！'))
    }
    return Joi.validate(order,Schema,{
        abortEarly: false,   //把所有错误检测完再返回
        allowUnknown:true   //允许对象包含被忽略的未知键
    })
}

module.exports = {
    OrderFront,validateOrderFront
}
