import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './SearchPrices.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap';
import Form from 'react-bootstrap/Form';
import data from '../../data.json';

function SearchPrices() {
  return (
    <>
      <Container>
        <h1 className="title">Search Used Car Prices</h1>
        <Row>
          <Col>
            <Form.Select
              aria-label="Default select example"
              className="select-col"
            >
              <option>Make</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Model</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Year</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Badges</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Body Type</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Body Type Config</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Fuel Type</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Transmission</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Engine</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Cylinders</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Division</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Drive</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Seat</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Doors</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Odometer</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>States</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Sale Category</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example ">
              <option>Sale Date</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example ">
              <option>Sort |</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Order By |</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col sm={4} className="searchbar">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Col>
          <Col>
            <Button variant="deafult" className="apply-btn">
              Apply Filter
            </Button>
          </Col>
          <Col>
            <Button variant="default" className="clear-btn">
              Clear Filter
            </Button>
          </Col>
          <Col md="auto" className="btnn">
            <Button variant="default" className="subscribe-btn">
              Subscribe to Geneerate Summary Report
            </Button>
          </Col>
        </Row>
        <Row>
          <Container>
            {data.map((car) => {
              return (
                <div className="box car-info-box">
                  <Row>
                    <Col>
                      <div className="car-info">
                        <strong>
                          <span>{car.make} </span>
                        </strong>

                        <strong>
                          <span>{car.model} </span>
                        </strong>
                        <strong>
                          <span>{car.year} </span>
                        </strong>
                      </div>
                    </Col>

                    <Col xs lg="2" className="subscribe-btn-col">
                      <Button variant="default" className="subscribe-btn">
                        Subscribe to Reveal Price
                      </Button>
                    </Col>
                    <Col xs lg="1">
                      <Button className="seeMore-btn">See More</Button>
                    </Col>
                  </Row>
                  <Row></Row>
                </div>
              );
            })}
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default SearchPrices;
