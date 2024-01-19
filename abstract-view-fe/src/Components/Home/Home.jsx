import React from "react";
import "./Home.css";
import imgData from "../../Data/imgData.json";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

//MUI
import StarsIcon from "@mui/icons-material/Stars";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  return (
    <div className="home-root">
      <div className="quote-section">
        <h1>Abstract View</h1>
        <h3>ola amigos latos konos mana fitos an siratos</h3>
      </div>
      <div className="card-section">
        <Row>
          {imgData.map((data) => {
            return (
              <Col key={data.title}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={require(`../../Static/${data.path}`)}
                  />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.content}</Card.Text>
                    <div className="card-icon">
                      <StarsIcon></StarsIcon>
                      <DeleteForeverIcon></DeleteForeverIcon>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <div className="add-img">
          <Fab variant="extended" size="medium">
            <AddIcon></AddIcon>Add Image
          </Fab>
        </div>
        <div className="pagination">
          <Stack spacing={2}>
            <Pagination 
            count={11} 
            variant="outlined" 
            showFirstButton 
            showLastButton
            boundaryCount={2}
            siblingCount={1}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Home;
