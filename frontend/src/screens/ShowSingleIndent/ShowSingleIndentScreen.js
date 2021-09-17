import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getIndentById, updateIndent } from '../../actions/indentActions'
import FormContainer from '../../components/FormContainer'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './showSingleIndentScreen.css'

const ShowSingleIndentScreen = ({ match }) => {
  const indentId = match.params.id

  const indentGetById = useSelector((state) => state.indentGetById)
  const { loading, error, indent } = indentGetById

  const indentUpdate = useSelector((state) => state.indentUpdate)
  const { success } = indentUpdate

  const [edit, setEdit] = useState(true)

  const [indentDate, setIndentDate] = useState()
  const [tenCount, setTenCount] = useState()
  const [twentyCount, setTwentyCount] = useState()
  const [fiftyCount, setFiftyCount] = useState()
  const [hundredCount, setHundredCount] = useState()
  const [fiveHundredCount, setFiveHundredCount] = useState()
  const [thousandCount, setThousandCount] = useState()
  const [fiveThousandCount, setFiveThousandCount] = useState()
  const [tenThousandCount, setTenThousandCount] = useState()
  const [fifteenThousandCount, setFifteenThousandCount] = useState()
  const [totalBalance, setTotalBalance] = useState()
  const [totalDiscount, setTotalDiscount] = useState()
  const [actualBalance, setActualBalance] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIndentById(indentId))
  }, [dispatch, success])

  const formatDate = (value) => {
    return value.slice(0, value.indexOf('T'))
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const data = {
      indentDate,
      tenCount,
      twentyCount,
      fiftyCount,
      hundredCount,
      fiveHundredCount,
      thousandCount,
      fiveThousandCount,
      tenThousandCount,
      fifteenThousandCount,
      totalBalance,
      totalDiscount,
      actualBalance,
    }

    setEdit(!edit);
    dispatch(updateIndent(indentId, data))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    indent && (
      <FormContainer>
          {success && <Message variant='success'>Data Updated!</Message> }
        <Row>
          <Col xs={8}>
            <h3 className='form-heading'>Indent Details</h3>
          </Col>
          <Col xs={4}>
            <Link to='/show/indent' className='link-btn'>
              Back
            </Link>
          </Col>
        </Row>

        <Form onSubmit={submitHandler} style={{ marginTop: '1rem' }}>
          <Form.Group as={Row} className='mb-3' controlId='indentDate'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Date</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='date'
                  value={
                    indentDate ? indentDate : formatDate(indent.indentDate)
                  }
                  onChange={(e) => setIndentDate(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{formatDate(indent.indentDate)}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='tenCount'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Ten count</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={tenCount ? tenCount : indent.tenCount}
                  onChange={(e) => setTenCount(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.tenCount}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='twentyCount'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Ten count</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={twentyCount ? twentyCount : indent.twentyCount}
                  onChange={(e) => setTwentyCount(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.twentyCount}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='fiftyCount'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Fifty count</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={fiftyCount ? fiftyCount : indent.fiftyCount}
                  onChange={(e) => setFiftyCount(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.fiftyCount}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='hundredCount'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Hundred count</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={hundredCount ? hundredCount : indent.hundredCount}
                  onChange={(e) => setHundredCount(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.hundredCount}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='fiveHundredCount'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Five hundred count</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={
                    fiveHundredCount
                      ? fiveHundredCount
                      : indent.fiveHundredCount
                  }
                  onChange={(e) => setFiveHundredCount(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.fiveHundredCount}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='thousandCount'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Thousand count</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={thousandCount ? thousandCount : indent.thousandCount}
                  onChange={(e) => setThousandCount(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.thousandCount}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='fiveThousandCount'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Five Thousand count</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={
                    fiveThousandCount
                      ? fiveThousandCount
                      : indent.fiveThousandCount
                  }
                  onChange={(e) => setFiveThousandCount(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.fiveThousandCount}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='tenThousandCount'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Ten Thousand count</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={
                    tenThousandCount
                      ? tenThousandCount
                      : indent.tenThousandCount
                  }
                  onChange={(e) => setTenThousandCount(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.tenThousandCount}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className='mb-3'
            controlId='fifteenThousandCount'
          >
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Fiteen Thousand count</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={
                    fifteenThousandCount
                      ? fifteenThousandCount
                      : indent.fifteenThousandCount
                  }
                  onChange={(e) => setFifteenThousandCount(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.fifteenThousandCount}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <hr />
          <Form.Group as={Row} className='mb-3' controlId='totalBalance'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Total Balance</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={totalBalance ? totalBalance : indent.totalBalance}
                  onChange={(e) => setTotalBalance(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.totalBalance}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='totalDiscount'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Total Discount</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={totalDiscount ? totalDiscount : indent.totalDiscount}
                  onChange={(e) => setTotalDiscount(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.totalDiscount}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='actualBalance'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Actual Balance</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={actualBalance ? actualBalance : indent.actualBalance}
                  onChange={(e) => setActualBalance(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.actualBalance}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          <hr />
          {edit && (
            <Button
              onClick={() => {
                setEdit(!edit)
              }}
              className='form-btn'
            >
              Edit
            </Button>
          )}
          {!edit && (
            <Button type='submit' className='form-btn'>
              Update
            </Button>
          )}
        </Form>
      </FormContainer>
    )
  )
}

export default ShowSingleIndentScreen
