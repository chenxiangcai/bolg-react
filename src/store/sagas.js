/*
* @name: saga总监听文件
* @description: 此文件在程序中注入中间件，用于各个文件的saga监听，并执行其相关的action
* @author: 陈相材
* @time: 2020-11-15 15:04:51
*/

import { takeEvery } from "redux-saga/effects";
import { sagas as login } from "../pages/login/";

let { TOLOGIN } = login.types;

function* sagas() {
    yield takeEvery(TOLOGIN, login.action);
}

export default sagas;
