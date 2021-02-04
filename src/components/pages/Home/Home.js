import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import ServiceCards from '../../cards/ServiceCards/ServiceCards';
import './Home.scss';

const Home = () => {
    const initialResize = window.innerWidth <= 600 ? true : false;

    const [resize, setResize] = useState(initialResize);

    const handleResize = () => {
        if (window.innerWidth <= 875) {
            setResize(true);
        } else {
            setResize(false);
        }
    }

    const homeBody =    <div className="home-image-body">
                            Aspen Rentals has years of experience in understanding how to help you with 
                            the best system for your application. We offer free onsite evaluations as 
                            well as material testing so you know exactly what one of our rentals can do 
                            for you. We understand chip density challenges as well as how to protect 
                            against solids and process bushy or stringy material.
                        </div>

    window.addEventListener("resize", handleResize);

    return (
        <>
            <div className="home-image">
                <div className="home-image-subtitle">PROVIDING THE BEST</div>
                <div className="home-image-title">
                    INDUSTRIAL <span className="briquetter-rentals">BRIQUETTER RENTALS</span>
                </div>
                {resize ? null : homeBody}
                <ButtonGroup className="home-image-button-group">
                    <Button className="home-image-button learn-more-button" variant="outline-primary">Learn More</Button>
                    <Button className="home-image-button contact-button" variant="primary">Contact</Button>
                </ButtonGroup>
            </div>
            <div>
            <ServiceCards />
            </div>
        </>
    );
}

export default Home;