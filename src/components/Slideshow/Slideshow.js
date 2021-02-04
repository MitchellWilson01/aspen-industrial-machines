import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import triangles1 from '../../images/triangles1.png';


const Slideshow = () => {
    const style = {
        height: "50vh",
    }


    return (
        <>
            <div>
            <Carousel 
                autoPlay={true} 
                infiniteLoop={true} 
                showThumbs={false} 
                stopOnHover={true}
                showStatus={false}
            >
                <div style={style}>
                    <img src={triangles1} />
                </div>
                <div style={style}>
                    <div>ho</div>
                </div>
                <div style={style}>
                    <div>he</div>
                </div>
            </Carousel>
            </div>
        </>
    );
}

export default Slideshow;