
import React from 'react';
import { 
  Card, 
  CardText, 
  CardBody,
  CardTitle, 
} from 'reactstrap';

const Venue = function Venue(props) {
  const {name, description} = props;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Venue;