import React from 'react';
import { Carousel } from 'react-bootstrap';
import './AdvantageCards.scss';


const AdvantageCards = () => {
    return (
        <>
            <div className="slideshow-container">
                <Carousel className="slideshow">
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        Briquetting <span className="briquetter-rentals">increases the value</span> of your metal chips
                    </Carousel.Item>
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        <span className="briquetter-rentals">Allows for recycling</span> of coolant fluids
                    </Carousel.Item>
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        <span className="briquetter-rentals">Little residual coolant</span> during transportation
                    </Carousel.Item>
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        Briquetters <span className="briquetter-rentals">eliminate</span> the need for centrifugal dryers
                    </Carousel.Item>
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        Handling and storage costs are <span className="briquetter-rentals">lowered</span> 
                        as a result of the <span className="briquetter-rentals">volume reduction</span>
                    </Carousel.Item>
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        Allows for <span className="briquetter-rentals">accurate weight</span> of briquettes produced
                    </Carousel.Item>
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        Lower <span className="briquetter-rentals">transport costs</span>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default AdvantageCards;