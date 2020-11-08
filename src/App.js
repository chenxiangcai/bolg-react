import React from "react";
import './App.css';
import 'antd/dist/antd.css'
import {adminRoutes} from "./routes";
import {Redirect, Route, Switch} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Switch>
                {
                    adminRoutes.map(route => {
                        return (
                            <Route key={route.path}
                                   path={route.path}
                                   exact={route.exact}
                                   render={routeProps => {
                                       return <route.component {...routeProps} />
                                   }
                                   }
                            />)
                    })}
                <Redirect from='/admin' to={adminRoutes[0].path}/>
                <Redirect to='/404'/>
            </Switch>
        </div>
    );
}

export default App;
