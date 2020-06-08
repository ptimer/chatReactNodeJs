import RegisterForm from '../components/RegisterForm'
import { withFormik } from 'formik';

import validate from '../../../utils/validate'

export default withFormik({
  mapPropsToValues: () => ({ username: '', email: '', password: '', password_repeat: '' }),

  // Custom sync validation
  validate: values => {
    const errors = {};

	Object.keys(values).keys.forEach(
		key => validate[key] && validate[key](errors, values[key])
	);

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 300);
  },

  displayName: 'RegisterForm',
})(RegisterForm);