
import React from 'react';
import { 
  Row,
  Col,
} from 'reactstrap';
import Octicon from '@githubprimer/octicons-react';
import {
  TriangleUp,
} from '@githubprimer/octicons-react';

const Venue = function Venue(props) {
  const {name, description, url, count} = props;
  return (
    <Row className="pt-3 mb-4 border border-dark">
      <Col sm="1">
        <Octicon icon={TriangleUp}/><br />
        <p>{count}</p>
      </Col>
      <Col sm="10">
        <h4><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></h4>
        <p>{description}</p>
      </Col>
    </Row>
  );
};

export default Venue;