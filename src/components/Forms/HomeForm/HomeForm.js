import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './HomeForm.scss';

const HomeForm = () => {
    return (
        <>
            <div className="home-form-container">
                <InputGroup className="home-form-top">
                    <FormControl
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="home-form-top">
                    <FormControl
                        placeholder="Email Address"
                        aria-label="Email Address"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
                <InputGroup className="home-form-bottom">
                    <FormControl as="textarea" placeholder="Message" aria-label="Message" />
                </InputGroup>
                <div className="home-form-button-container">
                    <Button className="home-form-button home-form-learn-more" variant="outline-primary">Learn More</Button>
                    <Button className="home-form-button home-form-send" variant="primary">Send</Button>
                </div>
            </div>
        </>
    );
}

export default HomeForm;