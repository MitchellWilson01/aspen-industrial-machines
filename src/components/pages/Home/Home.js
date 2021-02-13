import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import HomeForm from '../../Forms/HomeForm/HomeForm';
import ServiceCards from '../../cards/ServiceCards/ServiceCards';
import AdvantageCards from '../../cards/AdvatageCards/AdvatageCards';
import MaterialsBanner from '../../MaterialsBanner/MaterialsBanner';
import MaterialsBannerMobile from '../../MaterialsBannerMobile/MaterialsBannerMobile';

import thumbnail from '../../../images/thumbnail.jpg';
import picture7 from '../../../images/picture7.png';
import pucks from '../../../images/pucks.jpg';
import bricks from '../../../images/bricks.jpg';
import logo from '../../../images/logo.png';
import leaf from '../../../images/leaf.png';

import './Home.scss';

const Home = () => {
    const initialResize = window.innerWidth <= 829 ? true : false;
    const initialMobileView = window.innerWidth <= 915 ? true : false;

    const [resize, setResize] = useState(initialResize);
    const [mobileView, setMobileView] = useState(initialMobileView);

    const handleResize = () => {
        if (window.innerWidth <= 829) {
            setResize(true);
            setMobileView(true);
        } else {
            setResize(false);
            if (window.innerWidth <= 915) {
                setMobileView(true);
            } else {
                setMobileView(false);
            }
        }
    }

    const homeBody =    <div className="home-image-body">
                            Aspen Rentals has years of experience in understanding how to help you with 
                            the best system for your application. We offer free onsite evaluations as 
                            well as material testing so you know exactly what one of our rentals can do 
                            for you.
                        </div>

    const defintionsListRow =   <div className="home-blog-defintions">
                                    <div className="row">
                                        <div className="home-blog-definee">
                                            Material
                                        </div>
                                        <div className="home-blog-definition">
                                            Any type of allow or metal
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="home-blog-definee">
                                            Chips
                                        </div>
                                        <div className="home-blog-definition">
                                            Material that is flowable (if you cannot move it with a pitchfork then it is a chip)
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="home-blog-definee">
                                            String/Bushy
                                        </div>
                                        <div className="home-blog-definition">
                                            Material that is bound together in balls larger than 4 inches
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="home-blog-definee">
                                            Briquetting
                                        </div>
                                        <div className="home-blog-definition">
                                            The act of using pressure to form loose material into a solid
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="home-blog-definee">
                                            Shredding
                                        </div>
                                        <div className="home-blog-definition">
                                            Using opposing knives to shear stringy/bushy material into flowable chips
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="home-blog-definee">
                                            Puck/Briquette
                                        </div>
                                        <div className="home-blog-definition">
                                            The end product created by the briquetting process
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="home-blog-definee">
                                            Throughput
                                        </div>
                                        <div className="home-blog-definition">
                                            The volume per hour that can be expected
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="home-blog-definee">
                                            Density
                                        </div>
                                        <div className="home-blog-definition">
                                            The composition of the material being processed. In the industry we record this in 
                                            pounds per cubic foot.
                                        </div>
                                    </div>
                                </div>

    const defintionsListColumn =    <div className="home-blog-defintions">
                                        <div className="home-blog-definee">
                                            Material
                                        </div>
                                        <div className="home-blog-definition">
                                            Any type of allow or metal
                                        </div>
                                        <div className="home-blog-definee">
                                            Chips
                                        </div>
                                        <div className="home-blog-definition">
                                            Material that is flowable (if you cannot move it with a pitchfork then it is a chip)
                                        </div>
                                        <div className="home-blog-definee">
                                            String/Bushy
                                        </div>
                                        <div className="home-blog-definition">
                                            Material that is bound together in balls larger than 4 inches
                                        </div>
                                        <div className="home-blog-definee">
                                            Briquetting
                                        </div>
                                        <div className="home-blog-definition">
                                            The act of using pressure to form loose material into a solid
                                        </div>
                                        <div className="home-blog-definee">
                                            Shredding
                                        </div>
                                        <div className="home-blog-definition">
                                            Using opposing knives to shear stringy/bushy material into flowable chips
                                        </div>
                                        <div className="home-blog-definee">
                                            Puck/Briquette
                                        </div>
                                        <div className="home-blog-definition">
                                            The end product created by the briquetting process
                                        </div>
                                        <div className="home-blog-definee">
                                            Throughput
                                        </div>
                                        <div className="home-blog-definition">
                                            The volume per hour that can be expected
                                        </div>
                                        <div className="home-blog-definee">
                                            Density
                                        </div>
                                        <div className="home-blog-definition">
                                            The composition of the material being processed. In the industry we record this in 
                                            pounds per cubic foot.
                                        </div>
                                    </div>

    const definitionsSubtitle = <div className="home-blog-subtitle">
                                    Aspen Rentals feels it is good to support communications by providing a list of 
                                    common terms with definitions that may be helpful. Some may seem elementary, 
                                    but we have found people who have appreciated the information.
                                    <div className="home-blog-spacer"></div>
                                    {resize ? defintionsListColumn : defintionsListRow}
                                </div>

    const definitionsSubtitleMobile =   <div className="home-blog-subtitle">
                                            Aspen Rentals feels it is good to support communications by providing a list of 
                                            common terms with definitions.
                                            <div className="home-blog-spacer"></div>
                                            {resize ? defintionsListColumn : defintionsListRow}
                                        </div>

    const homeImageColumn = <div className="home-image-column">
                                <img src={picture7} className="home-blog-image-2 home-image-rounded"/>
                                <img src={pucks} className="home-blog-image-3 home-image-rounded"/>
                            </div>

    const homeImageSingle = <img src={pucks} className="home-blog-image-3 home-image-rounded"/>

    window.addEventListener("resize", handleResize);

    return (
        <>
            <div className="home-image">
                <div className="home-image-title-container">
                    <div className="home-image-subtitle">PROVIDING THE BEST</div>
                    <div className="home-image-title">
                        <span className="home-title-space">&nbsp;</span>
                            INDUSTRIAL
                        <span className="home-title-space">&nbsp;</span>
                    </div>
                    <div className="home-image-title briquetter-rentals">
                        <span className="home-title-space">&nbsp;</span>
                            BRIQUETTER
                        <span className="home-title-space">&nbsp;</span>
                    </div>
                    <div className="home-image-title briquetter-rentals">
                        <span className="home-title-space">&nbsp;</span>
                            RENTALS
                        <span className="home-title-space">&nbsp;</span>
                    </div>
                </div>
                {mobileView ? null : homeBody}
                <HomeForm />
            </div>
            <ServiceCards />
            {resize ? null : <hr className="home-page-break"/>}
            <div className="home-blog-container">
                <img src={thumbnail} className="home-blog-image-1"/>
                <div className="home-blog-title-advantages">
                    WHY BRIQUETTE MATERIAL?
                    <div className="home-blog-subtitle">
                        The following are just a few of the advantages to briquetting your material.
                        <div className="home-blog-spacer"></div>
                        <ul className="home-blog-list">
                            <li>
                                <div className="row home-blog-list-row">
                                    <i className="fas fa-angle-double-right home-blog-list-bullet"></i>
                                    &nbsp;&nbsp;
                                    <div className="advantage-text">Increase the value of your metal chips</div>
                                </div>
                            </li>
                            <li>
                                <div className="row home-blog-list-row">
                                    <i className="fas fa-angle-double-right home-blog-list-bullet"></i>
                                    &nbsp;&nbsp;
                                    <div className="advantage-text">Allow for recycling of coolant fluids</div>
                                </div>
                            </li>
                            <li>
                                <div className="row home-blog-list-row">
                                    <i className="fas fa-angle-double-right home-blog-list-bullet"></i>
                                    &nbsp;&nbsp;
                                    <div className="advantage-text">Little residual coolant during transport</div>
                                </div>
                            </li>
                            <li>
                                <div className="row home-blog-list-row">
                                    <i className="fas fa-angle-double-right home-blog-list-bullet"></i>
                                    &nbsp;&nbsp;
                                    <div className="advantage-text">Eiminate the need for centrifugal dryers</div>
                                </div>
                            </li>
                            <li>
                                <div className="row home-blog-list-row">
                                    <i className="fas fa-angle-double-right home-blog-list-bullet"></i>
                                    &nbsp;&nbsp;
                                    <div className="advantage-text">Lower handling and storage costs</div>
                                </div>
                            </li>
                            <li>
                                <div className="row home-blog-list-row">
                                    <i className="fas fa-angle-double-right home-blog-list-bullet"></i>
                                    &nbsp;&nbsp;
                                    <div className="advantage-text">Accurately weigh you briquettes</div>
                                </div>
                            </li>
                            <li>
                                <div className="row home-blog-list-row">
                                    <i className="fas fa-angle-double-right home-blog-list-bullet"></i>
                                    &nbsp;&nbsp;
                                    <div className="advantage-text">Lower transportation costs</div>
                                </div>
                            </li>
                        </ul>  
                    </div>
                </div>
                {mobileView ? homeImageSingle : null}
                <div className="home-blog-title-defintions">
                    COMMON DEFINTIONS
                    {resize ? definitionsSubtitleMobile : definitionsSubtitle}
                </div>
                {mobileView ? null : homeImageColumn}
            </div>
            {/*mobileView ? <MaterialsBannerMobile /> : <MaterialsBanner />*/}
            
        </>
    );
}

export default Home;

/*
<div className="home-image-2">
                <AdvantageCards />
            </div>
*/

/*
<div className="home-image-subtitle">PROVIDING THE BEST</div>
                    <div className="home-image-title">
                        INDUSTRIAL <span className="briquetter-rentals">BRIQUETTER RENTALS </span>
                    </div>
*/

/*
<div className="home-image-subtitle">PROVIDING THE BEST</div>
                    <div className="home-image-title ind">INDUSTRIAL</div>
                    <div className="home-image-title indy briquetter-rentals">BRIQUETTER</div>
                    <div className="home-image-title briquetter-rentals">RENTALS</div>
*/

