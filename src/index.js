import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GuideHeader from './components/GuideHeader';
import Venue from './components/Venue';
import NavBar from './components/layouts/NavBar';

import {
  Container,
} from 'reactstrap';

const GUIDE = {
  id: 1,
  title: 'Chiang Mai for First Time Visitors',
  author: 'Richard Lo',
  venues: [
    {
      id: 1,
      name: "Khun Kae's Juice Bar",
      description: 'The BEST smoothie place in Chiang Mai. Tons of options, super fresh, and crazy cheap.',
      mapUrl: 'https://goo.gl/maps/MdBKESmZ1Em',
      count: '10',
    },
    {
      id: 2,
      name: "The North Gate Jazz Co-Op",
      description: 'Cool venue to hang out and listen to live jazz. I think that they have live jazz every night.',
      mapUrl: 'https://goo.gl/maps/ddf3wXwt6Q42',
      count: '3',
    },
  ]
}
 

const CityGuideApp = function CityGuideApp () {
  return(
    <React.Fragment>
      <NavBar />
      <Container className="mt-5">
        <GuideHeader 
          title={GUIDE.title} 
          author={GUIDE.author}
        />
        <Venue 
          name={GUIDE['venues'][0].name}
          description={GUIDE['venues'][0].description}
        />
      </Container>
    </React.Fragment>
  );
};

ReactDOM.render(
    <CityGuideApp />,
    document.getElementById('root')
)