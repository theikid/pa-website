import React from 'react';
import ReactSlick from 'react-slick';

import '../scss/_carousel.scss';



const Carousel = (props) => {
    const {
        children,  infinite, responsive, slidesToShow
    } = props;

    return (
        <div className="carousel-wrapper">
            <ReactSlick
                dots={true}
                arrows={false}
                centerPadding={16}
                lazyload="ondemand"
                responsive={responsive}
                slidesToShow={slidesToShow}
                infinite={infinite}
                swipeToSlide
            >
                {children}
            </ReactSlick>
        </div>
    );
};

export default Carousel;
