import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function(props) {
    return (
        <div >
            <Carousel stopOnHover infiniteLoop autoPlay showArrows={false} showIndicators={false} showThumbs={false} showStatus={false}>{props.img}</Carousel>
            {/* <p>{props.description}</p> */}
        </div>
    )
}