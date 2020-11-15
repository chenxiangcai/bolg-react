import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {PageError404} from "./error-style";

class Error404 extends Component {
    render() {
        return (
            <PageError404>
                <div className="container">
                    <div className="header">
                        <h3>页面不存在</h3>
                    </div>
                    <p className="intro">
                        跳转到<Link to="/"> 首页 </Link>
                        {/*  {history.length >= 2 ? <span>或者返回 <a onClick={this.handleGoBack}>上一步（{time}）</a>
                        </span> : null}*/}
                    </p>
                </div>
            </PageError404>
        );
    }
}

export default Error404;