import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SearchPricesPage.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap';
import Form from 'react-bootstrap/Form';
import data from '../../data.json';
import Filter from '../filter/Filter';

function SearchPrices() {
  //Load and modify data
  let [newCarList, updateCarList] = useState(data);

  //This function is to filter the result with user selection
  const onFilterValueSelected = (filterValue) => {
    let filteredCarList;
    if (filterValue !== 'Make') {
      filteredCarList = data.filter((car) => {
        return car.make === filterValue;
      });
    } else {
      filteredCarList = data;
    }
    updateCarList(filteredCarList);
  };

  return (
    <>
      {/* The main page for displaying car information
       */}
      <Container>
        <h1 className="title">Search Used Car Prices</h1>
        <Filter filterValueSelected={onFilterValueSelected}></Filter>
        <Container>
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
        </Container>
        <Container>
          <Row className="middle-line">
            <Col>
              <div className="advertising">
                Need a Prices People Pay Valuation Report?
              </div>
            </Col>
            <Col className="getOneNow-col">
              <Button variant="deafult" className="getOneNow-btn">
                Get One Now
              </Button>
            </Col>
          </Row>
        </Container>
        <Row>
          <Container>
            {newCarList.map((car) => {
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
