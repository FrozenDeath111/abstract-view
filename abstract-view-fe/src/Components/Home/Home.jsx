import React from "react";
import "./Home.css";
import imgData from "../../Data/imgData.json";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//MUI
import StarsIcon from "@mui/icons-material/Stars";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Home = () => {
  return (
    <div className="home-root">
      <div className="quote-section">
        <h1>Abstract View</h1>
      </div>
      <div className="card-section">
        <Row>
          {imgData.map((data) => {
            return (
              <Col key={data.title}>
                <div className="custom-card">
                  <img
                    className="custom-card-img"
                    src={require(`../../Static/${data.path}`)}
                    alt={data.content}
                  />
                  <div className="custom-card-description">
                    <h5>{data.title}</h5>
                    <h5>{data.content}</h5>
                    <div className="card-icon">
                      <StarsIcon></StarsIcon>
                      <DeleteForeverIcon></DeleteForeverIcon>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Home;
