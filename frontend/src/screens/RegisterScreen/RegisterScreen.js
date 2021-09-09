import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import { Form, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

const RegisterScreen = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  //   const dispatch = useDispatch()

  //   const userRegister = useSelector((state) => state.userRegister)
  //   const { loading, error, userInfo } = userRegister

  //   useEffect(() => {
  //     if (userInfo) {
  //       history.push('/')
  //     }
  //   }, [history, userInfo])

  //   const submitHandler = (e) => {
  //       e.preventDefault();

  //       if(password !== confirmPassword ) {
  //           setMessage("Passwords did not match")
  //       }else {

  //       }
  //   }
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <FormContainer>
      <h1>Sign up</h1>

      {/* {loading && <Loader />} 
      {error && <Message variant='danger'>{message}</Message>} */}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder='Enter email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder='Enter password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder='Enter password'
            type='password'
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </Form.Group>
        <Form.Group>
          <Button type='submit' variant='primary' style={{ marginTop: '2rem'}}>
            Register
          </Button>
        </Form.Group>
      </Form>

      <Row className='py-3'>
        <span>Already have an account? <Link to='/login'>Login</Link></span>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
