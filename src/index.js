import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 导入路由
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {mainRoutes} from "./routes";

ReactDOM.render(
    <Router>
        <Switch>

            {/*匹配管理页路由，转到APP组件进行渲染*/}
            <Route path='/admin' render={(routeProps) =>
                <App {...routeProps}/>
            }/>
            {/*遍历主要路由*/}
            {mainRoutes.map(route => {
                return <Route key={route.path} {...route}/>
            })}

            <Redirect from='/' to='/admin'/>
            <Redirect to='/404'/>
        </Switch>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
