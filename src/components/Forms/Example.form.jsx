/**
 * This is example of using Formik and Yup for form validation
 */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Form, Button, InputGroup, Col } from 'react-bootstrap';

// Create form schema that will be used as validator
const formSchema = yup.object({
  username: yup.string().required('Username is required!'),
  password: yup.string().required('Password is required!')
})

const ExampleForm = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={formSchema}
        onSubmit={ props.onSubmit }
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="login.username">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                name="username"
                type="text"
                placeholder="Username"
                onChange={ handleChange }
                value={ values.username }
                isValid={ touched.username && !errors.username }
                isInvalid={ errors.username }
              />
              <Form.Control.Feedback type="invalid">
                { errors.username }
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group controlId="login.password">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                name="password"
                type="password"
                placeholder="Password"
                onChange={ handleChange }
                value={ values.password }
                isValid={ touched.password && !errors.password }
                isInvalid={ errors.password }
              />
              <Form.Control.Feedback type="invalid">
                { errors.password }
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="m-2" type="submit" disabled={ errors.password || errors.username }>Login</Button>
        </Form>
        )}
      </Formik>
    </div>
  )
}

ExampleForm.propTypes = {
  onSubmit: PropTypes.func,
  onDecline: PropTypes.func
}

ExampleForm.defaultProps = {
  onSubmit: () => console.log('default onsubmit'),
}

export default ExampleForm;