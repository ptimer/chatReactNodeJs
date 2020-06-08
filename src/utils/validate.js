export default {
	username: (errors, values) => {
		if (!values.username) {
	      errors.username = 'Обязательное поле';
	    }
	},

	email: (errors, values) => {
		if (!values.email) {
		    errors.email = 'Обязательное поле';
		  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		    errors.email = 'Неверный email адрес';
		  }
	},

	password: (errors, values) => {
		if (!values.password) {
			errors.password = 'Обязательное поле'
		}else if(!/(?=.*[0-9])/i.test(values.password)) {
			errors.password = 'Пароль должен содержать хоть 1 цифру'
		}
	},

	password_repeat: (errors, values) => {
		if(!values.password_repeat){
			errors.password_repeat = 'Обязательное поле'
		}
		else if (values.password_repeat != values.password && !errors.password){
			errors.password_repeat = 'Не совпадает';
		}else if(!/(?=.*[0-9])/i.test(values.password_repeat)) {
			errors.password_repeat = 'Пароль должен содержать хоть 1 цифру'
		}
	}
}