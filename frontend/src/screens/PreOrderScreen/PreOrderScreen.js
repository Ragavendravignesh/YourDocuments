import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import { addOrder } from '../../actions/orderActions'
import Message from '../../components/Message'
import { Link } from 'react-router-dom';
import './preOrderScreen.css'

const PreOrderScreen = () => {
  const [amount, setAmount] = useState('')
  const [mobileno, setMobileno] = useState('')
  const [message, setMessage] = useState('')

  const orderAdd = useSelector((state) => state.orderAdd)
  const { loading, success, error } = orderAdd

  const dispatch = useDispatch()

  const resetForm = () => {
      setAmount('')
      setMobileno('')
      setMessage('')
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const order = { amount, mobileno, message }

    console.log('order: ', order);
    dispatch(addOrder(order))
  }

  return (
    <FormContainer>
      <h3 className='form-heading'>Place Order</h3>
      <p>
        Suppose if you want to buy stamp papers, have doubts or clarifications.
        Place a pre-order here, we'll help you with your queries.
      </p>
      {error && <Message variant='danger'>{error}</Message>}
      {success && (
        <Message variant='success'>
          Thanks, we received your order. Will contact you soon...
        </Message>
      )}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='amount'>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter amount'
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='mobileno'>
          <Form.Label>Mobile No</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter Mobileno'
            onChange={(e) => setMobileno(e.target.value)}
            value={mobileno}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='message'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' rows={3} onChange={e => setMessage(e.target.value)} value={message}/>
        </Form.Group>
        {!success && (
          <Button
            type='submit'
            style={{ marginTop: '1rem' }}
            className='form-btn'
          >
            Order
          </Button>
        )}
        {success && (
          <Link to='/' className='link-btn' style={{ marginTop: '1rem' }}>
            Click here to go back
          </Link>
        )}
      </Form>
    </FormContainer>
  )
}

export default PreOrderScreen
