import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

const CityGuideApp = function CityGuideApp(props) {
  return(
    <Row>
      <Col>
        <h1 className="text-center mb-4">
          {props.title}
        </h1>
      </Col>
    </Row>
  );
};

export default CityGuideApp;