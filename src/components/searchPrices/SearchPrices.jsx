import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './SearchPrices.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap';
import Form from 'react-bootstrap/Form';

function SearchPrices() {
  return (
    <>
      <Container>
        <h1 className="title">Search Used Car Prices</h1>
        <Row>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Make</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Model</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Year</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Badges</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Body Type</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Body Type Config</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Fuel Type</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Transmission</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Engine</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Cylinders</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Division</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Drive</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Seat</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Doors</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Odometer</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>States</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Sale Category</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Sale Date</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Sort |</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col">
            <Form.Select aria-label="Default select example">
              <option>Order By |</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col className="select-col"></Col>
        </Row>
      </Container>
    </>
  );
}

export default SearchPrices;
