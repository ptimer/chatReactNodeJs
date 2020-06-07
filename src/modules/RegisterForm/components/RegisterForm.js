import React, {Component} from 'react'
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom'

import { Button, Block } from '../../../components/index'

class RegisterForm extends Component {

  render() {

    const success = false;

    return (
      <div>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
        <Block>
         { !success ? (
          <Form
            name="normal_login"
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              hasFeedback validateStatus="success"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input size="large" className="auth__username" prefix={<MailOutlined/>} placeholder="E-mail" />
            </Form.Item>

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
              <Input size="large" className="auth__username" prefix={<UserOutlined/>} placeholder="Ваше имя" />
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
                prefix={<LockOutlined/>}
                type="password"
                placeholder="Пароль"
              />

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
                prefix={<LockOutlined/>}
                type="password"
                placeholder="Повторить пароль"
              />

            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/login">Войти в аккаунт</Link>
          </Form>) : (
            <div className="auth__success-block">
                <InfoCircleTwoTone style={{fontSize: '50px'}}/>
                <h2>Подвердите свой аккаунт</h2>
                <p>На вашу почту отправлено письмо с ссылкой на подтверждение аакаунта.</p>
            </div>
          )}
        </Block>
      </div>
    );
  }
};

export default RegisterForm