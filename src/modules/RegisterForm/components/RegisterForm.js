import React from 'react'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom'

import { Button, Block } from '../../../components/index'

const RegisterForm = props => {
    const success = false;
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = props;

    return (
      <div>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
        <Block>
         { !success ? (
          <Form onSubmit={handleSubmit}>
            <Form.Item hasFeedback validateStatus={!touched.email ? "" : errors.email ? "error" : "success"}>
              <Input
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur} size="large" className="auth__username" prefix={<MailOutlined/>} placeholder="E-mail" 
              />
            </Form.Item>

            <Form.Item hasFeedback validateStatus={!touched.username ? '' : errors.username ? "error" : "success"}>
              <Input 
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur} size="large" className="auth__username" prefix={<UserOutlined/>} placeholder="Ваше имя" 
              />
            </Form.Item>

            <Form.Item hasFeedback validateStatus={!touched.password ? '' : errors.password ? "error" : "success"}>
              <Input
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                size="large" className="auth__password" prefix={<LockOutlined/>}  type="password" placeholder="Пароль"
              />

            </Form.Item>

            <Form.Item hasFeedback validateStatus={!touched.password_repeat ? '' : errors.password_repeat ? "error" : "success"}>
              <Input 
                name="password_repeat"
                onChange={handleChange}
                onBlur={handleBlur}
                size="large" className="auth__password" prefix={<LockOutlined/>} type="password" placeholder="Повторить пароль"
              />

            </Form.Item>

            <Form.Item>
              <Button type="primary" onClick={handleSubmit} htmlType="submit" size="large">
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
};

export default RegisterForm