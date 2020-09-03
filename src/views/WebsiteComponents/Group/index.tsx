import React  from 'react';
import * as styles from './styles.module.css';
import { Container, Row, Col,Button } from 'reactstrap';
// ReactJS plugin for a nice carousel
import Slick from "react-slick";



    
    // custom previous button for the slick component
    const PrevButton =( props:any) => {
        return (
        <Button
            className="btn-round btn-icon btn-simple slick-prev slick-arrow"
            color="primary"
            aria-label="Previous"
            type="button"
            onClick={props.onClick}
        >
            <i className="tim-icons icon-minimal-left" />
        </Button>
        );
    };
    // custom next button for the slick component
    const NextButton = (props:any) => {
        return (
        <Button
            className="btn-round btn-icon btn-simple slick-next slick-arrow"
            color="primary"
            aria-label="Next"
            type="button"
        >
            <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
        </Button>
        );
    };
    
    let slickSettings = {
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
        className: "center slider",
        slide: "section",
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }

        ]
    };
    
const Group:React.FC = () => {


    return (
        <>
            <div className={`cd-section ${styles.default.groupWrapper}`} id="testimonials">
            {/* ********* TESTIMONIALS 4 ********* */}
            <div className="testimonials-4">
                <Container fluid>
                <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                    <h2 className={`title ${styles.default.groupTitle}`}>Group</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="positioned" lg="4" md="8" xs="12">
                    <h1 className={`title ${styles.default.groupTitle}`}>See our customers opinion</h1>
                    <p className="description text-white">
                        Meet Wingman, a robust suite of styled pages and components,
                        powered by Bootstrap 4. The ideal starting point for product
                        landing pages, stylish web-apps and complete company
                        websites.
                    </p>
                    </Col>
                    <Col md="12">
                    <Slick {...slickSettings}>
                        <div>
                        <div className="info text-left">
                            <p className="description text-white"> <h4 className={`title ${styles.default.groupTitle}`}>Investment</h4>
                    
                            Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. A single rose can be my garden... a single friend, my world.
                            </p>
                        </div>
                        </div>
                        <div>
                        <div className="info text-left">
                        

                            <p className="description text-white"> <h4 className={`title ${styles.default.groupTitle}`}>Investment</h4>
                            Artist is a term applied to a person who engages in an activity deemed to be an art. An artist also may be defined unofficially as "a person who expresses him- or herself through a medium". He is a descriptive term applied to a person who engages in an activity deemed to be an art.
                            </p>
            
                        </div>
                        </div>
                        <div>
                        <div className="info text-left">
                    

                            <p className="description text-white"> <h4 className={`title ${styles.default.groupTitle}`}>Investment</h4>
                            The simplest visual description uses ordinary words to convey what the writer sees. First he or she must look at the subject – slowly, carefully, and repeatedly, if possible – to identify the parts that make the whole
                            </p>
                    
                        </div>
                        </div>
                        <div>
                        <div className="info text-left">
                       

                            <p className="description text-white"> <h4 className={`title ${styles.default.groupTitle}`}>Investment</h4>
                            Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover, which raised $65 million to expand its pet sitting and dog-walking businesses..Finding temporary housing for your dog should be as easy as renting an Airbnb.
                            </p>
                    
                        </div>
                        </div>
                        <div>
                        <div className="info text-left">
                       

                            <p className="description text-white"> <h4 className={`title ${styles.default.groupTitle}`}>Investment</h4>
                            Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, late-stage financings and a few outsized early-stage rounds in tech and healthcare..enture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large.
                            </p>
                    
                        </div>
                        </div>
                    </Slick>
                    </Col>
                </Row>
                </Container>
            </div>
            {/* ********* END TESTIMONIALS 4 ********* */}
            </div>
        </>
    
    );
    
}

export default Group;
