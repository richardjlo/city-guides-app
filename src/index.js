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
      name: 'Khun Kae\'s Juice Bar',
      description: 'The BEST smoothie place in Chiang Mai. Tons of options, super fresh, and crazy cheap.',
      url: 'https://goo.gl/maps/MdBKESmZ1Em',
      count: '10',
    },
    {
      id: 2,
      name: 'The North Gate Jazz Co-Op',
      description: 'Cool venue to hang out and listen to live jazz. I think that they have live jazz every night.',
      url: 'https://goo.gl/maps/ddf3wXwt6Q42',
      count: '3',
    },
    {
      id: 3,
      name: 'Cherng Doi Roast Chicken',
      description: 'Get the roast chicken and sticky rice',
      url: 'https://goo.gl/maps/npfpFc9PRvD2',
      count: '1',
    },
    {
      id: 4,
      name: 'Khao Soi Khun Yai',
      description: 'Our favorite place for getting Khao Soi, one of Chiang Mai\'s specialty dishes. Basically a curry noodle soup that uses flat egg noodles. Chicken seems to be the more popular option, but they also have beef.',
      url: 'https://goo.gl/maps/LLbkoPkGJcQ2',
      count: '6',
    },
    {
      id: 5,
      name: 'Akha Ama Coffee',
      description: 'One of the many fancy coffee shops in Chiang Mai. These guys are popular because they have their own coffee farm. Kat says coffee is really good.',
      url: 'https://goo.gl/maps/vYMMQpMC9a82',
      count: '3',
    },
    {
      id: 6,
      name: 'David\'s Kitchen',
      description: 'Really nice fine dining restaurant. One of my favorite meals in Chiang Mai. We went for our anniversary and got the 4 course meal. I think it came out to about $50 USD per person.',
      url: 'https://goo.gl/maps/6UonyMRwkRt',
      count: '0',
    },
    {
      id: 7,
      name: 'Saturday Night Market',
      description: 'Loads of great Thai street food for super cheap. I like the Saturday Night Market more than the Sunday one because it\'s mostly food and little shopping. Also know that the locations are different between Sat and Sun markets. Sunday market is much larger has lots of shopping (the little crafts that people make + art) and less food.',
      url: 'https://goo.gl/maps/Avuwvfjp19q',
      count: '0',
    },
    {
      id: 8,
      name: 'Chicken Rice Koyi',
      description: 'Amazing chicken rice. Get the mixed plate (half steamed chicken and half fried chicken)',
      url: 'https://goo.gl/maps/pduwo6ZUApE2',
      count: '0',
    },
  ]
}
 

const CityGuideApp = function CityGuideApp () {
  const venues = GUIDE.venues.map((obj) => {
    return(
      <Venue 
        key={obj.id}
        id={obj.id}
        name={obj.name}
        description={obj.description}
        url={obj.url}
        count={obj.count}
      />
    );
  });

  return(
    <React.Fragment>
      <NavBar />
      <Container className="mt-5">
        <GuideHeader 
          title={GUIDE.title} 
          author={GUIDE.author}
        />
        {venues}
      </Container>
    </React.Fragment>
  );
};

ReactDOM.render(
    <CityGuideApp />,
    document.getElementById('root')
)