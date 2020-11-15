/*
* @name: 登录页的saga监听
* @description: 监听匹配dispatch的action
* @author: 陈相材
* @time: 2020-11-15 15:08:41
*/

import {put} from "redux-saga/effects";
import * as types from "./action-types";
import {post} from "../../utils/http";

function* toLogin(action) {
    try {
        console.log(2323)
        //console.log(yield select())
        const result = yield post({
            url: action.url
        }, action.data);
        if (result.meta.status === 200) {
            //命令 middleware 向 Store 发起一个 action
            yield put({type: types.SUCCESSLOGIN, data: result});
        } else {
            // 发送一个登录失败的action
            yield put({type:types.ERRORLOGIN})
        }
    } catch (e) {
        yield put({type:types.NETERROR})
    }
}

export {types, toLogin as action};
