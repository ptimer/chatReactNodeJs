import RegisterForm from '../components/RegisterForm'
import { withFormik } from 'formik';

import validateForm from '../../../utils/validate'

export default withFormik({
  mapPropsToValues: () => ({ username: '', email: '', password: '', password_repeat: '' }),

  // Custom sync validation
  validate: values => {
    const errors = {};
      
    validateForm({isAuth: false, values, errors})

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