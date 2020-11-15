import React, {Component} from 'react';
import {PageError401} from "./error-style";

class Error401 extends Component {
    render() {
        return (
            <PageError401>
                <div className="container">
                    <div className="header">
                        <h3>需要登录</h3>
                    </div>
                    {/* <p className="intro">
                        跳转到<a onClick={toLogin}> 登录页面({time}) </a>
                        {history.length >= 2 ? <span>或者返回 <a onClick={this.handleGoBack}>上一步</a></span> : null}
                    </p>*/}
                </div>
            </PageError401>
        );
    }
}

export default Error401;