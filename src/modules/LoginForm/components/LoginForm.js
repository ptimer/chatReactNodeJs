import React, {Component} from 'react'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

import { Button, Block } from '../../../components/index'

class LoginForm extends Component {

  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form
            name="normal_login"
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              hasFeedback validateStatus="success"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input size="large" className="auth__username" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input size="large" className="auth__password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
              />

            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Войти в аккаунт
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
          </Form>
        </Block>
      </div>
    );
  }
};

export default LoginForm