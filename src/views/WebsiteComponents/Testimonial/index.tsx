import React, { useState }  from 'react';
import * as styles from './styles.module.css';
import { Container, Row, Col, Carousel, CarouselItem, CarouselIndicators} from 'reactstrap';



const items2 = [
{
    content: (
    <div className="info info-warning">
        <div className="card-avatar">
        <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
            alt="..."
            className="img img-raised rounded"
            src={require("../../../assets/img/michael.jpg")}
            />
        </a>
        </div>
        <h4 className="info-title" style={{color: "#caa86a !important"}}>Best Quality</h4>
        <p className="description">
        Gain access to the demographics, psychographics, and location of
        unique people.
        </p>
    </div>
    ),
    altText: "",
    caption: "",
    src: "0"
},
{
    content: (
    <div className="info info-warning">
        <div className="card-avatar">
        <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
            alt="..."
            className="img img-raised rounded"
            src={require("../../../assets/img/olivia.jpg")}
            />
        </a>
        </div>
        <h4 className="info-title">Best Quality</h4>
        <p className="description">
        Gain access to the demographics, psychographics, and location of
        unique people.
        </p>
    </div>
    ),
    altText: "",
    caption: "",
    src: "1"
}
];


const Testimonial:React.FC = () => {
    const [carousel1Index , setCarousel1Index] = useState<number>(0);
    const [carousel2Index , setCarousel2Index] = useState<number>(0);

    const [carousel1Animating , setCarousel1Animating] = useState<boolean>(false);
    const [carousel2Animating , setCarousel2Animating] = useState<boolean>(false);

    const onExiting = (carousel:any) => {
        if(carousel === 1){
            setCarousel1Animating(true);
        }
        if(carousel === 2){
            setCarousel2Animating(true)
        }
    };

    const onExited =  (carousel:any)  => {
        if(carousel === 1){
            setCarousel1Animating(false);
        }
        if(carousel === 2){
            setCarousel2Animating(false)
        }
    };
    const next = (carousel:number, items:any) => {
        if(carousel1Animating || carousel2Animating)return;
        if(carousel === 1){
            const nextIndex =
                carousel1Index === items.length - 1
                ? 0
                : carousel1Index + 1;
                setCarousel1Index(nextIndex)
        }
        if(carousel === 2){
            const nextIndex =
                carousel2Index === items.length - 1
                ? 0
                : carousel2Index + 1;
                setCarousel2Index(nextIndex)
        }
        
    };
    const previous = (carousel:number, items:any) => {
        if(carousel1Animating || carousel2Animating)return;
        if(carousel === 1){
            const nextIndex =
                carousel1Index === 0
                ? items.length - 1
                : carousel1Index - 1;
                setCarousel1Index(nextIndex)
        }
        if(carousel === 2){
            const nextIndex =
                carousel2Index === 0
                ? items.length - 1
                : carousel2Index - 1;
                setCarousel2Index(nextIndex)
        }
        };


    const goToIndex = (newIndex:any, carousel:number) => {
        if(carousel1Animating || carousel2Animating)return;
        if(carousel === 1){
            setCarousel1Index(newIndex)
        }
        if(carousel === 2){
            setCarousel2Index(newIndex)
        }
    };
    return (
        <div className={`cd-section ${styles.default.wrapper} `} id="blogs">
            <h2 className={styles.default.titleHeader}>
                Testimonial
            </h2>
            <div className="cd-section" id="testimonials" style={{width: '100%'}}>
                {/* ********* TESTIMONIALS 2 ********* */}
                <div className="testimonials-2">
                    <Container>
                    <Row>
                        <Col md="12">
                        <Carousel
                            activeIndex={carousel2Index}
                            next={() => next(2, items2)}
                            previous={() => previous(2, items2)}
                        >
                            <CarouselIndicators
                            items={items2}
                            activeIndex={carousel2Index}
                            onClickHandler={newIndex => goToIndex(newIndex, 2)}
                            />
                            {items2.map((item, key) => {
                            return (
                                <CarouselItem
                                onExiting={() => onExiting(2)}
                                onExited={() => onExited(2)}
                                key={key}
                                className="justify-content-center"
                                >
                                {item.content}
                                </CarouselItem>
                            );
                            })}
                            <a
                            className="carousel-control-prev"
                            data-slide="prev"
                            href="#pablo"
                            onClick={e => {
                                e.preventDefault();
                                previous(2, items2);
                            }}
                            role="button"
                            >
                            <i className="tim-icons icon-minimal-left" />
                            </a>
                            <a
                            className="carousel-control-next"
                            data-slide="next"
                            href="#pablo"
                            onClick={e => {
                                e.preventDefault();
                                next(2, items2);
                            }}
                            role="button"
                            >
                            <i className="tim-icons icon-minimal-right" />
                            </a>
                        </Carousel>
                        </Col>
                    </Row>
                    </Container>
                </div>
                {/* ********* END TESTIMONIALS 2 ********* */}
                </div>
        </div>
    
    );
}

export default Testimonial;