import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

const CityGuideApp = function CityGuideApp(props) {
  const {title, author} = props;
  return(
    <Row>
      <Col>
        <div className="text-center mb-4">
          <h1>{title}</h1>
          <p>By {author}</p>
        </div>
      </Col>
    </Row>
  );
};

export default CityGuideApp;