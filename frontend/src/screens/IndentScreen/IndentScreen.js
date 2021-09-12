import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import { Form, Row, Col, Card, Button } from 'react-bootstrap'
import './indentScreen.css'
import {
  TEN_RATE,
  TWENTY_RATE,
  FIFTY_RATE,
  HUNDRED_RATE,
  FIVE_HUNDRED_RATE,
  THOUSAND_RATE,
  FIVE_THOUSAND_RATE,
  TEN_THOUSAND_RATE,
  FIFTEEN_THOUSAND_RATE,
} from './commisionRates'

const IndentScreen = () => {
  const [tenCount, setTenCount] = useState(0)
  const [tenValue, setTenValue] = useState(0)
  const [tenComn, setTenComn] = useState(0)

  const [twentyCount, setTwentyCount] = useState(0)
  const [twentyValue, setTwentyValue] = useState(0)
  const [twentyComn, setTwentyComn] = useState(0)

  const [fiftyCount, setFiftyCount] = useState(0)
  const [fiftyValue, setFiftyValue] = useState(0)
  const [fiftyComn, setFiftyComn] = useState(0)

  const [hundredCount, setHundredCount] = useState(0)
  const [hundredValue, setHundredValue] = useState(0)
  const [hundredComn, setHundredComn] = useState(0)

  const [fiveHundredCount, setFiveHundredCount] = useState(0)
  const [fiveHundredValue, setFiveHundredValue] = useState(0)
  const [fiveHundredComn, setFIveHundredComn] = useState(0)

  const [thousandCount, setThousandCount] = useState(0)
  const [thousandValue, setThousandValue] = useState(0)
  const [thousandComn, setThousandComn] = useState(0)

  const [fiveThousandCount, setFiveThousandCount] = useState(0)
  const [fiveThousandValue, setFiveThousandValue] = useState(0)
  const [fiveThousandComn, setFiveThousandComn] = useState(0)

  const [tenThousandCount, setTenThousandCount] = useState(0)
  const [tenThousandValue, setTenThousandValue] = useState(0)
  const [tenThousandComn, setTenThousandComn] = useState(0)

  const [fifteenThousandCount, setFifteenThousandCount] = useState(0)
  const [fifteenThousandValue, setFifteenThousandValue] = useState(0)
  const [fifteenThousandComn, setFifteenThousandComn] = useState(0)

  const [total, setTotal ] = useState(0)
  const [commission, setCommission ] = useState(0);
  const [actualTotal, setActualTotal ] = useState(0);

  const dispatch = useDispatch()

  const submitHandler = () => {
    console.log('Hi')
  }

  const roundOff = (value) => {
    return Math.round((value + Number.EPSILON) * 100) / 100
  }

  const calculateTen = (value) => {
    setTenCount(value)
    setTenComn(roundOff(value * TEN_RATE))
    setTenValue(roundOff(10 * value) - roundOff(value * TEN_RATE))
  }

  const calculateTwenty = (value) => {
    setTwentyCount(value)
    setTwentyComn(roundOff(value * TWENTY_RATE))
    setTwentyValue(roundOff(20 * value) - roundOff(value * TEN_RATE))
  }

  const calculateFifty = (value) => {
    setFiftyCount(value);
    setFiftyComn(roundOff(value * FIFTY_RATE));
    setFiftyValue(roundOff(50*value) - roundOff(value * FIFTY_RATE));
  }

  const calculateHundred = (value) => {
    setHundredCount(value);
    setHundredComn(roundOff(value * HUNDRED_RATE ));
    setHundredValue(roundOff(100 * value) - roundOff(value * HUNDRED_RATE));
  }

  const calculateFiveHundred = (value) => {
    setFiveHundredCount(value);
    setFIveHundredComn(roundOff(value * FIVE_HUNDRED_RATE));
    setFiveHundredValue(roundOff(500 * value) - roundOff(value * FIVE_HUNDRED_RATE));
  }

  const calculateThousand = (value) => {
    setThousandCount(value);
    setThousandComn(roundOff(value * THOUSAND_RATE));
    setThousandValue(roundOff(1000 * value) - roundOff(value * THOUSAND_RATE));
  }

  const calculateFiveThousand = (value) => {
    setFiveThousandCount(value);
    setFiveThousandComn(roundOff(value * FIVE_THOUSAND_RATE));
    setFiveThousandValue(roundOff(5000 * value ) - roundOff(value * FIVE_THOUSAND_RATE))
  }

  const calculateTenThousand = (value) => {
    setTenThousandCount(value);
    setTenThousandComn(roundOff(value * TEN_THOUSAND_RATE));
    setTenThousandValue(roundOff(10000 * value ) - roundOff(value * TEN_THOUSAND_RATE))
  }

  const calculateFifteenThousand = (value) => {
    setFifteenThousandCount(value);
    setFifteenThousandComn(roundOff(value * FIFTEEN_THOUSAND_RATE))
    setFifteenThousandValue(roundOff(15000 * value) - roundOff(value * FIFTEEN_THOUSAND_RATE))
  }

  const calculateActualTotal = () => {
    const total = tenValue + twentyValue + fiftyValue + hundredValue + fiveHundredValue+ thousandValue + fiveThousandValue + tenThousandValue + fifteenThousandValue;

    setTotal(total);
    return total;
  }

  const calculateCommision = () => {
    const totalComn = tenComn + twentyComn + fiftyComn + hundredComn + fiveHundredComn + thousandComn + fiveThousandComn + tenThousandComn + fifteenThousandComn;
    
    setCommission(totalComn);
    return totalComn;
  }

  const calculateTotal = () => {
    const total = roundOff((tenCount * 10) + (twentyCount * 20 ) + (fiftyCount * 50) + (hundredCount * 100) + (fiveHundredCount * 500) + (thousandCount * 1000) + (fiveThousandCount * 5000) + (tenThousandCount * 10000) + (fifteenThousandCount * 15000));

    setActualTotal(total);

    return total
  }

  const calculate = () => {
    calculateActualTotal();
    calculateTotal();
    calculateCommision();
  }

  return (
    <FormContainer>
      <h3 className='form-heading'>Indent Form</h3>
      <Form onSubmit={submitHandler} className='indent-form-spacing'>
        <Row>
          <Col>
            <h4>Rupees</h4>
          </Col>
          <Col>
            <h4>Count</h4>
          </Col>
          <Col>
            <h4>Total</h4>
          </Col>
        </Row>
        <Row className='indent-row-spacing'>
          <Col>
            <Form.Group controlId='ten'>
              <Form.Control readOnly type='number' value={10}></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='tenCount'>
              <Form.Control
                type='number'
                value={tenCount}
                onChange={(e) => calculateTen(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='tenValue'>
              <Form.Control
                readOnly
                type='number'
                value={tenValue}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='indent-row-spacing'>
          <Col>
            <Form.Group controlId='twenty'>
              <Form.Control readOnly type='number' value={20}></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='twentyCount'>
              <Form.Control
                type='number'
                value={twentyCount}
                onChange={(e) => calculateTwenty(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='tenValue'>
              <Form.Control
                readOnly
                type='number'
                value={twentyValue}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='indent-row-spacing'>
          <Col>
            <Form.Group controlId='fifty'>
              <Form.Control readOnly type='number' value={50}></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='fiftyCount'>
              <Form.Control
                type='number'
                value={fiftyCount}
                onChange={(e) => calculateFifty(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='fiftyValue'>
              <Form.Control
                readOnly
                type='number'
                value={fiftyValue}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='indent-row-spacing'>
          <Col>
            <Form.Group controlId='hundred'>
              <Form.Control readOnly type='number' value={100}></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='hundredCount'>
              <Form.Control
                type='number'
                value={hundredCount}
                onChange={(e) => calculateHundred(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='hundredValue'>
              <Form.Control
                readOnly
                type='number'
                value={hundredValue}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='indent-row-spacing'>
          <Col>
            <Form.Group controlId='fiveHundred'>
              <Form.Control readOnly type='number' value={500}></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='fiveHundredCount'>
              <Form.Control
                type='number'
                value={fiveHundredCount}
                onChange={(e) => calculateFiveHundred(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='fiveHundredValue'>
              <Form.Control
                readOnly
                type='number'
                value={fiveHundredValue}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='indent-row-spacing'>
          <Col>
            <Form.Group controlId='thousand'>
              <Form.Control readOnly type='number' value={1000}></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='thousandCount'>
              <Form.Control
                type='number'
                value={thousandCount}
                onChange={(e) => calculateThousand(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='thousandValue'>
              <Form.Control
                readOnly
                type='number'
                value={thousandValue}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='indent-row-spacing'>
          <Col>
            <Form.Group controlId='fiveThousand'>
              <Form.Control readOnly type='number' value={5000}></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='fiveThousandCount'>
              <Form.Control
                type='number'
                value={fiveThousandCount}
                onChange={(e) => calculateFiveThousand(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='fiveThousandValue'>
              <Form.Control
                readOnly
                type='number'
                value={fiveThousandValue}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='indent-row-spacing'>
          <Col>
            <Form.Group controlId='tenThousand'>
              <Form.Control readOnly type='number' value={10000}></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='tenThousandCount'>
              <Form.Control
                type='number'
                value={tenThousandCount}
                onChange={(e) => calculateTenThousand(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='tenThousandValue'>
              <Form.Control
                readOnly
                type='number'
                value={tenThousandValue}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='indent-row-spacing'>
          <Col>
            <Form.Group controlId='fifteenThousand'>
              <Form.Control readOnly type='number' value={15000}></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='fifteenThousandCount'>
              <Form.Control
                type='number'
                value={fifteenThousandCount}
                onChange={(e) => calculateFifteenThousand(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='fifteenThousandValue'>
              <Form.Control
                readOnly
                type='number'
                value={fifteenThousandValue}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      <Card className="indent-card-spacing">
        <Card.Body>
          <h4>Actual Total: <span className="indent-field">{actualTotal}</span></h4>
          <h4>Commision: <span className="indent-field">{commission}</span></h4>
          <h4>Caculated Total: <span className="indent-field">{total}</span></h4>
        </Card.Body>
      </Card>
      <Button variant='primary' className='form-green-btn'>Store</Button>
      <Button variant='primary' className='form-btn ms-2' onClick={calculate}>Calculate</Button>
      
    </FormContainer>
  )
}

export default IndentScreen
