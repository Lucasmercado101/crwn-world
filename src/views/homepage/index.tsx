import React from 'react';
import HomeItem from '../../components/homeItem';
import './homepage.sass';
import hats from '../../assets/images/hats.jpg';
import jackets from '../../assets/images/jackets.jpg';
import sneakers from '../../assets/images/sneakers.jpg';
import womens from '../../assets/images/womens.jpg';
import mens from '../../assets/images/mens.jpg';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { SMALL_BREAKPOINT } from '../../utils';

const HomePage = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="homepage-wrapper">
      <div className="homepage">
        <div className="homepage__top">
          <HomeItem small text="hats" to="8ZAoQc0WHRWytwSizmm9" image={hats} />
          <HomeItem
            small
            text="jackets"
            to="PDmJXIC6XDSy69L02Xx0"
            image={jackets}
          />
          <HomeItem
            small
            text="sneakers"
            to="VfWOUPi7STkRSwfvYIkC"
            image={sneakers}
          />
        </div>
        <div className="homepage__bottom">
          <HomeItem
            big={width > SMALL_BREAKPOINT}
            small={width < SMALL_BREAKPOINT}
            text="womens"
            image={womens}
            to={'QNP01hNXBmmRs7Ieop7n'}
          />
          <HomeItem
            big={width > SMALL_BREAKPOINT}
            small={width < SMALL_BREAKPOINT}
            text="mens"
            image={mens}
            to="NQNlS51V4orlFvu8oQ7q"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
