import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import FormContainer from '../../components/FormContainer'
import { getUserDetails, updateUserProfile } from '../../actions/userActions'
import { USER_UPDATE_RESET } from '../../constants/userConstants'

const ProfileScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user, loading, error } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const { success } = userUpdate

  const dispatch = useDispatch()

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
        console.log('hi');
      if (user && !user.name || success) {
        dispatch({ type : USER_UPDATE_RESET })
        dispatch(getUserDetails('profile'))
      } else {
        user && setName(user.name)
        user && setEmail(user.email)
      }
    }
  }, [dispatch, history, user, userInfo])

  const updateHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Password did not match')
    } else {
      const data = { _id: user._id, name, email, password }
      dispatch(updateUserProfile(data))
    }
  }

  return (
    <FormContainer>
      <h3 className='form-heading'>Profile details</h3>
      {loading && <Loader />}
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {success && <Message variant='success'>Profile Updated</Message>}
      <Form onSubmit={updateHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm password:</Form.Label>
          <Form.Control
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          type='submit'
          variant='primary'
          style={{ marginTop: '2rem' }}
          className='form-btn'
        >
          Update
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ProfileScreen
