export default ({isAuth, values, errors}) => {

	const password = values.password;

	const rules = {
		username: (errors, values) => {
			if (!values) {
		      errors.username = 'Обязательное поле';
		    }
		},

		email: (errors, values) => {
			if (!values) {
			    errors.email = 'Обязательное поле';
			  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
			    errors.email = 'Неверный email адрес';
			  }
		},

		password: (errors, values) => {
			if (!values) {
				errors.password = 'Введите пароль'
			}else if(!/(?=.*[0-9])/i.test(values)) {
				errors.password = isAuth ? 'Неверный пароль' : 'Пароль должен содержать хоть 1 цифру'
			}
		},

		password_repeat: (errors, values) => {
			if(!values){
				errors.password_repeat = 'Введите пароль еще раз'
			}
			else if (values != password && !errors.password){
				errors.password_repeat = 'Не совпадает';
			}else if(!/(?=.*[0-9])/i.test(values)) {
				errors.password_repeat = 'Пароль должен содержать хоть 1 цифру'
			}
		}
	}

	Object.keys(values).forEach(
		key => rules[key] && rules[key](errors, values[key])
	);
}