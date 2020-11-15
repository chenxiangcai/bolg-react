import React, {Component} from 'react';
import {Button, Form, Input, message} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {LoginWrap} from "./login-style";
import logo from '../../assets/images/logo.png'
import {connect} from 'react-redux'
import {TOLOGIN} from "./action-types";
import {LoginApi} from '../../../src/common/api/index'

const mapState = (state) => ({
    status: state.login.status
})
const mapDispatch = (dispatch) => ({
    toLogin(values) {
        dispatch({
            type: TOLOGIN,
            url: LoginApi,
            data: values
        })
    }
})

//组件连接store
@connect(mapState, mapDispatch)


class Login extends Component {
    onFinish = values => {
        const {userID, userPassword} = values;
        if (userID.trim() === '' || userPassword.trim() === '') {
            message.error('请输入工号或密码！')
        } else {
            this.props.toLogin(values)
        }
    };

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            const {status, history} = this.props
            switch (status) {
                case 1:
                    return history.push('/list');
                case -1:
                    return message.warning('网络连接错误！');
                default:
                    return message.error('账号或密码错误！')
            }
        }
    }

    render() {
        return (
            <LoginWrap>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                >
                    <img className='logo-left' src={logo}/>
                    <img className='logo' src={logo}/>
                    <span className='login-form-title'>账号登录</span>
                    <Form.Item
                        name="userID"
                        rules={[
                            {
                                required: true,
                                message: '请输入工号',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="工号"/>
                    </Form.Item>
                    <Form.Item
                        name="userPassword"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}
                                        type="password"
                                        placeholder="密码"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large"
                                className="login-form-button">立即登录</Button>
                        <div className="login-form-login"><span>还没有账号？<a href="">去注册...</a></span></div>
                    </Form.Item>
                </Form>
            </LoginWrap>

        );
    }
}

export default Login;