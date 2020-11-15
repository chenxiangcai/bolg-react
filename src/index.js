import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 导入路由
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {mainRoutes} from "./routes";
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
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

                <Redirect to='/404'/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
