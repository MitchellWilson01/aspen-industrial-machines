import React from 'react';
import { Carousel } from 'react-bootstrap';
import './AdvantageCards.scss';


const AdvantageCards = () => {
    return (
        <>
            <div className="slideshow-container">
                <Carousel className="slideshow">
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        Briquetting increases the value of your metal chips
                    </Carousel.Item>
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        Allows for recycling of coolant fluids
                    </Carousel.Item>
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        Little residual coolant during transportation
                    </Carousel.Item>
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        Briquetters eliminate the need for centrifugal dryers
                    </Carousel.Item>
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        Handling and storage costs are lowered as a result of the volume reduction
                    </Carousel.Item>
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        Allows for accurate weight of briquettes produced
                    </Carousel.Item>
                    <Carousel.Item className="slideshow-item" interval={2000}>
                        Lower transport costs
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default AdvantageCards;