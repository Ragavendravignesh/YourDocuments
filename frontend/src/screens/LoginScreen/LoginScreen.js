import React, { useState, useEffect } from 'react'
import { Form, Row, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { login } from '../../actions/userActions'
import { Link } from 'react-router-dom'

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, error, loading } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [userInfo, history])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h3 className="form-heading">Login</h3>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' style={{ marginTop: '2rem' }} className='form-btn'>
          Login
        </Button>
      </Form>
      <Row>
        <span>
          New customer?{' '}
          <Link to='/register' className='form-link'>
            Register
          </Link>
        </span>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
