import LoginForm from '../components/LoginForm'
import { withFormik } from 'formik';

import validateForm from '../../../utils/validate'

export default withFormik({
  mapPropsToValues: () => ({ username: '', password: ''}),

  // Custom sync validation
  validate: values => {
    const errors = {};
    
    validateForm({isAuth: true, values, errors})

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 300);
  },

  displayName: 'LoginForm',
})(LoginForm);