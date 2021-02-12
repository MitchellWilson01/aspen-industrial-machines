import React from 'react';
import alluminum1 from '../../images/alluminum1.jpg';
import brass1 from '../../images/brass1.jpg';
import bronze1 from '../../images/bronze1.jpg';
import castiron1 from '../../images/castiron1.jpg';
import copper1 from '../../images/copper1.jpg';
import hastelloy1 from '../../images/hastelloy.jpg';
import iron1 from '../../images/iron1.jpg';
import stainless1 from '../../images/stainless1.jpg';
import steel1 from '../../images/steel1.jpg';
import './MaterialsBanner.scss';

const MaterialsBanner = () => {
    return (
        <>
            <div className="materials-banner-background">
                <div className="materials-banner-title">
                    PROCESSED MATERIAL SAMPLES 
                </div>
                <div className="materials-banner-collection">
                    <div class="row materials-banner-row">
                        <img src={alluminum1} className="materials-banner-image"/>
                        <img src={brass1} className="materials-banner-image"/>
                        <img src={bronze1} className="materials-banner-image"/>
                        <img src={castiron1} className="materials-banner-image"/>
                    </div>
                </div>
                <div className="materials-banner-collection">
                    <div class="row materials-banner-row">
                        <img src={copper1} className="materials-banner-image"/>
                        <img src={hastelloy1} className="materials-banner-image"/>
                        <img src={iron1} className="materials-banner-image"/>
                        <img src={stainless1} className="materials-banner-image"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MaterialsBanner;