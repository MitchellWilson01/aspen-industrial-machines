import React from 'react';
import './MaterialsBannerMobile.scss';
import alluminum1 from '../../images/alluminum1.jpg';
import brass1 from '../../images/brass1.jpg';
import bronze1 from '../../images/bronze1.jpg';
import castiron1 from '../../images/castiron1.jpg';


const MaterialsBannerMobile = () => {
    return (
        <>
            <div className="materials-banner-mobile-background">
                <div className="materials-banner-mobile-title">
                    PROCESSED MATERIAL SAMPLES
                </div>
                <div className="materials-banner-mobile-image-container">
                        <img src={alluminum1} className="materials-banner-mobile-image"/>
                </div>
                <div className="materials-banner-mobile-image-container">
                        <img src={brass1} className="materials-banner-mobile-image"/>
                </div>
                <div className="materials-banner-mobile-image-container">
                        <img src={bronze1} className="materials-banner-mobile-image"/>
                </div>
                <div className="materials-banner-mobile-image-container">
                        <img src={castiron1} className="materials-banner-mobile-image"/>
                </div>
            </div>

        </>
    );
}

export default MaterialsBannerMobile;