import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import ServiceCards from '../../cards/ServiceCards/ServiceCards';
import AdvantageCards from '../../cards/AdvatageCards/AdvatageCards';
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
                <div className="button-group">
                    <Button className="home-image-button learn-more-button" variant="outline-primary">Learn More</Button>
                    <Button className="home-image-button contact-button" variant="primary">Contact</Button>
                </div>
            </div>
            <ServiceCards />
            <div className="home-image-2">
                <AdvantageCards />
            </div>
            <div className="long-text-title">Why AIM?</div>
            <div className="long-text-container">
                <p>If you are a manufacturing facility running a few or many machining centers and lathes, 
                    you are familiar with the ongoing need to handle chips and turnings.  For years there 
                    have been companies offering briquetter systems, wringer systems, bailers and the list 
                    goes on.</p>
                <p>Of course just as with anything you buy, there are cheap options and there are top of 
                    the line options.  But now there is a third option that gives you the opportunity to 
                    rent top of the line systems that are refurbished between uses.  All the value of 
                    briquetting your material without the upfront cost or the serving costs.</p>
                <p>AIM offers briquetters of all different throughput volumes, footprints and models.  
                    Plus all rentals come with install and start-up training as well as PM maintenance and 
                    24/7 on call service support and 48 hours guaranteed onsite support.</p>
                <p>AIM has years of experience in understanding how to help you with the best system for 
                    your application.  We offer free onsite evaluations as well as material testing so you 
                    know exactly what one of our rentals can do for you.  We understand chip density 
                    challenges as well as how to protect against solids and process bushy or stringy material.</p> 
                <p>AIM can customize a system for longer term renters as well supporting them with larger 
                    feeding hoppers, shredders, conveyors and more.</p>
            </div>
        </>
    );
}

export default Home;

/*
<div className="home-image-2-item">Briquetting increases the value of your metal chips</div>
                <div className="home-image-2-item">Allows for recycling of coolant fluids</div>
                <div className="home-image-2-item">Little residual coolant during transportation</div>
                <div className="home-image-2-item">Briquetters eliminate the need for centrifugal dryers</div>
                <div className="home-image-2-item">Handling and storage costs are lowered as a result of the volume reduction</div>
                <div className="home-image-2-item">Allows for accurate weight of briquettes produced</div>
*/