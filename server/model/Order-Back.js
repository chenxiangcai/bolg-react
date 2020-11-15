const mongoose = require('mongoose');
const Joi = require('joi');

//后台 厨师长订单集合规则
const orderBackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderDetail',
        required: true
    },
    status: { //1 已出菜 ,默认0未出菜
        type: Number,
        required: true,
        default: 0,
    }
}, {versionKey: false}) //忽略增加的文档在数据库中的__v字段

const OrderBack = mongoose.model('OrderFront', orderBackSchema);

//添加验证
const validateOrderBack = order => {
    const Schema = {
        name: Joi.string().required().min(2).max(4).error(new Error('请输入菜品名！')),
        category: Joi.string().required().error(new Error('请输入菜品分类！')),
        price: Joi.number().required().error(new Error('请输入菜品分类！')),
    }
    return Joi.validate(order, Schema, {
        abortEarly: false,   //把所有错误检测完再返回
        allowUnknown: true   //允许对象包含被忽略的未知键
    })
}

module.exports = {
    OrderBack, validateOrderBack
}
