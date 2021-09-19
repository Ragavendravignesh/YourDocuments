import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMyOrder } from '../../actions/orderActions'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import './showMyOrdersScreen.css'

const ShowMyOrdersScreen = () => {
  const dispatch = useDispatch()

  const orderGetMine = useSelector((state) => state.orderGetMine)
  const { loading, error, orders } = orderGetMine

  useEffect(() => {
    dispatch(getMyOrder())
  }, [dispatch])

  return (
    <Container style={{ marginTop: '4rem' }}>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      <Row className='justify-content-md-center'>
        <Col lg={8} md={6}>
          {orders &&
            orders.map((order, idx) => (
              <Card className='order-card' key={idx}>
                <Card.Text className='order-content'>
                  Mobile : {order.mobileno}
                  <br />
                  Amount: {order.amount}
                  <br />
                  Message: {order.message}
                </Card.Text>
              </Card>
            ))}
        </Col>
      </Row>
    </Container>
  )
}

export default ShowMyOrdersScreen
