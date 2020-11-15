/*
* @name: 路由模块
* @description: 配置主路由和后台管理路由
* @author: 陈相材
* @time: 2020-11-04 18:25:21
*/

import Login from "../pages/login/Login";
import Index from "../pages/admin/dashboard";
import List from "../pages/admin/blogs/List";
import Edit from "../pages/admin/blogs/Edit";
import Error404 from "../pages/error/Error404";
import Error401 from "../pages/error/Error401";

export const mainRoutes = [{
    path: '/login',
    component: Login
},{
    path:'/404',
    component: Error404
},{
    path:'/401',
    component: Error401
}]

export const adminRoutes = [{
    path: '/admin/dashboard',
    component: Index
}, {
    path: '/admin/blogs',
    component: List,
    exact: true
}, {
    path: '/admin/blogs/edit/:id',
    component: Edit
}
]