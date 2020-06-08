import React from 'react'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

import { Button, Block } from '../../../components/index'

const LoginForm = (props) => {

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
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form onSubmit={handleSubmit}>
            <Form.Item hasFeedback validateStatus={!touched.username ? '' : errors.username ? "error" : "success"}
              help={errors.username && touched.username ? errors.username : ""}>
              <Input 
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur} size="large" className="auth__username" prefix={<UserOutlined/>} placeholder="Ваше имя" 
              />
            </Form.Item>
            
            <Form.Item hasFeedback validateStatus={!touched.password ? '' : errors.password ? "error" : "success"}
               help={errors.password && touched.password ? errors.password : ""}>
              <Input
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                size="large" className="auth__password" prefix={<LockOutlined/>}  type="password" placeholder="Пароль"
              />

            </Form.Item>

            <Form.Item>
              <Button type="primary" onClick={handleSubmit} htmlType="submit" size="large">
                Войти в аккаунт
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
          </Form>
        </Block>
      </div>
    );
}

export default LoginForm