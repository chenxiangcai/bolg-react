/*
* @name: 具体的state更新文件
* @description: 向前台发送更新后的状态执行者
* @author: 陈相材
* @time: 2020-11-15 15:10:24
*/

import {ERRORLOGIN, NETERROR, SUCCESSLOGIN, TOLOGIN} from "./action-types";
import {setStore} from "../../utils/storage";

const defaultState = {
    //登录状态
    status: 0
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case TOLOGIN :
            return {
                ...state, action,
            };
        case SUCCESSLOGIN:
            const {token} = action.data
            setStore('token', token)
            return {
                ...state,
                status: 1
            }
        case ERRORLOGIN:
            return {
                ...state,
                status: Math.random()
            }
        case NETERROR:
            return {
                ...state,
                status: -1
            }
        default:
            return state;
    }
};
