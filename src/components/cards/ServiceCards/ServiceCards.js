import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCards.scss';


const ServiceCards = () => {
    return (
        <>
            <div className="service-card-container">
                <div className="service-card-item">
                    <Card className="service-card">
                        <Card.Title className="service-card-title">High Quality Equipment Rental</Card.Title>
                            <div className="service-card-icon">
                                <i className="fas fa-cogs"></i>
                            </div>
                        <Card.Text className="service-card-text">
                            Wide selection of affordable equipment
                        </Card.Text>
                    </Card>
                </div>
                <div className="service-card-item">
                    <Card className="service-card">
                        <Card.Title className="service-card-title">Aftermarket Modifications</Card.Title>
                            <div className="service-card-icon">
                                <i className="fas fa-toolbox"></i>
                            </div>
                        <Card.Text className="service-card-text">
                            Custom modifications of equipment
                        </Card.Text>
                    </Card>
                </div>
                <div className="service-card-item">
                    <Card className="service-card">
                        <Card.Title className="service-card-title">Repairs & Refurbishing</Card.Title>
                            <div className="service-card-icon">
                                <i className="fas fa-wrench"></i>
                            </div>
                        <Card.Text className="service-card-text">
                            Third party repair services for major manufactures
                        </Card.Text>
                    </Card>
                </div>
                <div className="service-card-item">
                    <Card className="service-card">
                        <Card.Title className="service-card-title">Mobile Trailer Conversions</Card.Title>
                            <div className="service-card-icon">
                                <i className="fas fa-trailer"></i>
                            </div>
                        <Card.Text className="service-card-text">
                            Transfer fixed units onto trailers
                        </Card.Text>
                    </Card>
                </div>
                <div className="service-card-item">
                    <Card className="service-card">
                        <Card.Title className="service-card-title">OEM & Specialty Parts</Card.Title>
                            <div className="service-card-icon">
                                <i className="fas fa-industry"></i>
                            </div>
                        <Card.Text className="service-card-text">
                            Genuine parts from major manufacturers
                        </Card.Text>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default ServiceCards;