import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Input, Container, Row, Card, CardBody, CardImg, CardTitle, CardText, Col, CardHeader } from "reactstrap";
import axios from "axios";

import Header from "../components/Header";

const Dashboard = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://samples.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`)
      .then((res) => {
        console.log(res.data);
        setposts(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Header />
      <Container>
        <div style={{ width: "28rem", marginLeft:420 }}>
          {posts &&
            posts.map((posts) => (
              <div key={posts.id}>
                <Card className="card-stats mb-4 mb-lg-0" style={{ height: "18rem", marginTop:40 }}>
                  <CardHeader style={{ height: "10rem", backgroundImage: "url(" + require("../assets/img/bluesky2.jpg").default + ")", backgroundSize: "cover", backgroundPosition: "center top" }}>
                    {/* <CardImg
            alt="..."
            src={require("../assets/img/bluesky.jpg").default}
            top
          /> */}

                    <Row style={{ marginTop: "10%" }}>
                      <Col md="6">
                        <CardText className=" text-white mb-0" style={{ fontSize: "70%" }}>
                          {posts.name} {","} {posts.sys.country}
                        </CardText>
                        <CardText className=" text-white mb-0" style={{ fontSize: "40%" }}>
                          {" "}
                          gdgdfgf{" "}
                        </CardText>
                      </Col>
                      {/* <Col md="1">
                        <div className="vr bg-secondary" />
                      </Col> */}
                      <Col md="5">
                        <CardText className="text-white mb-0" style={{ fontSize: "70%" }}>
                          {posts.main.temp} {" °C"}{" "}
                        </CardText>
                        <CardText className=" text-white mb-0" style={{ fontSize: "40%" }}>
                          {" "}
                          Temp Min: {posts.main.temp_min} {" °C"}{" "}
                        </CardText>
                        <CardText className=" text-white mb-0" style={{ fontSize: "40%" }}>
                          {" "}
                          Temp Max: {posts.main.temp_max} {" °C"}{" "}
                        </CardText>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody style={{ backgroundColor: "#454d5e" }}>
                    {/* <Row>
                      <Col md="6">
                        <CardText className=" text-muted mb-0" style={{ fontSize: "70%" }}>
                          {posts.name} {","} {posts.sys.country}
                        </CardText>
                        <CardText className=" text-muted mb-0" style={{ fontSize: "40%" }}> gdgdfgf </CardText>
                      </Col>
                      <Col md="1" >
                        <div className="vr bg-secondary" />
                        </Col>
                      <Col md="5">
                        <CardText className="text-muted mb-0" style={{ fontSize: "70%" }}>
                          {posts.main.temp} {" °C"} {" "}
                        </CardText>
                        <CardText className=" text-muted mb-0" style={{ fontSize: "40%" }}> Temp Min: {posts.main.temp_min} {" °C"} </CardText>
                        <CardText className=" text-muted mb-0" style={{ fontSize: "40%" }}> Temp Max: {posts.main.temp_max} {" °C"} </CardText>
                      </Col>
                    </Row> */}
                    <Row>
                      <Col md="4">
                        <CardText className=" text-white mb-0" style={{ fontSize: "50%" }}>
                          {" "}
                          Pressure: {posts.main.pressure} {"hPa"}{" "}
                        </CardText>
                        <CardText className=" text-white mb-0" style={{ fontSize: "50%" }}>
                          {" "}
                          Humidity: {posts.main.humidity}%{" "}
                        </CardText>
                        <CardText className=" text-white mb-0" style={{ fontSize: "50%" }}>
                          {" "}
                          Visibility: {posts.visibility}.0km{" "}
                        </CardText>
                      </Col>
                      <Col md="1">
                        <div className="vr bg-white" />
                      </Col>
                      <Col md="3">
                        <CardText className=" text-white mb-0" style={{ fontSize: "50%" }}>
                          {" "}
                          {posts.wind.speed}.0m/s {posts.wind.deg} Degree{" "}
                        </CardText>
                      </Col>
                      <Col md="1">
                        <div className="vr bg-white" />
                      </Col>
                      <Col md="3">
                        <CardText className="text-white mb-0" style={{ fontSize: "50%" }}>
                          {" "}
                          Sunrise: {posts.sys.sunrise} {" °C"}{" "}
                        </CardText>
                        <CardText className=" text-white mb-0" style={{ fontSize: "50%" }}>
                          {" "}
                          Sunset: {posts.sys.sunset} {" °C"}{" "}
                        </CardText>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            ))}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
