const mongoose = require('mongoose');
const Joi = require('joi');

//前台 点餐详细表 集合规则
const orderDetailSchema = new mongoose.Schema({
    detailedID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderFront',
        required:[true, '接待订单id不存在']
    },
    foodID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dishes',
        required:[true, '食物id不存在']
    },
    number:{
        type: Number,
        required:true
    },
    status:{ //默认1 已送出 ,0未送出
        type: Number,
        required: true,
        default: 0,
    }
},{versionKey:false}) //忽略增加的文档在数据库中的__v字段

const OrderDetail = mongoose.model('orderDetail',orderDetailSchema);

//添加验证
const validateOrderDetail = order =>{
    const Schema = {
        number: Joi.number().valid(0, 1).error(new Error('请输入菜品点餐数量！'))
    }
    return Joi.validate(order,Schema,{
        abortEarly: false,   //把所有错误检测完再返回
        allowUnknown:true   //允许对象包含被忽略的未知键
    })
}

module.exports = {
    OrderDetail,validateOrderDetail
}
