import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Label, Container, Row, Col, Input } from "reactstrap";
import weatherIcon from "../assets/img/weather.png"

const Header = () => {
  return (
    <>
      <Container>
        <Row>
            <Col md="12">
          <img alt="..." src={weatherIcon}  style={{width:'5rem', height:'5rem'}} />
          {/* </Col>
          <Col md="6"> */}
          <Label>Weather App</Label>
          </Col>
        </Row>
        <Row>
          <Col md="12">
          <div style={{marginLeft:540, marginTop: 30, marginBottom:60}}>
                      <Input                      
                      type="text"
                        placeholder="Search..."
                        style={{ borderWidth: "2.5px", width: "15rem", height: "2rem",  textAlign: "left", borderRadius: "15px" }}
                        onChange={(e) => {
                          //setSearch(e.target.value);
                        }}              
                      />
                    </div>
                    </Col>
                    </Row>
      </Container>
    </>
  );
};

export default Header;
