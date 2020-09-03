import React, { useState } from 'react';
import * as styles from './styles.module.css';


// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem
} from "reactstrap";

    // core components
const items = [
    {
        content: (
        <Container>
            <Row>
            <Col md="4">
                <h1 className={`title ${styles.default.projectName}`}>Charlie Watson</h1>
            </Col>
            <Col md="4">
                <img
                alt="..."
                className="d-block"
                src={require("../../../assets/img/charlie.jpg")}
                />
            </Col>
            <Col md="4">
                <div className="wrapper">
                <div className={`description ${styles.default.projectDescription}`}>
                    Artist is a term applied to a person who engages in an activity
                    deemed to be an art. An artist also may be defined unofficially
                    as "a person who expresses him- or herself through a medium". He
                    is a descriptive term applied to a person who engages in an
                    activity deemed to be an art. An artist also may be defined
                    unofficially as "a person who expresses him- or herself through
                    a medium".
                </div>
                <div className="footer">
                    <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    >
                    <i className="fab fa-twitter" />
                    </Button>
                    <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    >
                    <i className="fab fa-facebook-square" />
                    </Button>
                    <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    >
                    <i className="fab fa-dribbble" />
                    </Button>
                </div>
                </div>
            </Col>
            </Row>
        </Container>
        ),
        altText: "",
        caption: "",
        src: "0"
    },
    {
        content: (
        <Container>
            <Row>
            <Col md="4">
                <h1 className={`title ${styles.default.projectName}`}>Quavo Austen</h1>
            </Col>
            <Col md="4">
                <img
                alt="..."
                className="d-block"
                src={require("../../../assets/img/tom-klein.jpg")}
                />
            </Col>
            <Col md="4">
                <div className="wrapper">
                <div className={`description ${styles.default.projectDescription}`}>
                    Artist is a term applied to a person who engages in an activity
                    deemed to be an art. An artist also may be defined unofficially
                    as "a person who expresses him- or herself through a medium". He
                    is a descriptive term applied to a person who engages in an
                    activity deemed to be an art. An artist also may be defined
                    unofficially as "a person who expresses him- or herself through
                    a medium".
                </div>
                <div className="footer">
                    <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    >
                    <i className="fab fa-twitter" />
                    </Button>
                    <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    >
                    <i className="fab fa-facebook-square" />
                    </Button>
                    <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    >
                    <i className="fab fa-dribbble" />
                    </Button>
                </div>
                </div>
            </Col>
            </Row>
        </Container>
        ),
        altText: "",
        caption: "",
        src: "1"
    },
    {
        content: (
        <Container>
            <Row>
            <Col md="4">
                <h1 className={`title ${styles.default.projectName}`}>Lucy</h1>
            </Col>
            <Col md="4">
                <img
                alt="..."
                className="d-block"
                src={require("../../../assets/img/lucy.jpg")}
                />
            </Col>
            <Col md="4">
                <div className="wrapper">
                <div className={`description ${styles.default.projectDescription}`}>
                    Artist is a term applied to a person who engages in an activity
                    deemed to be an art. An artist also may be defined unofficially
                    as "a person who expresses him- or herself through a medium". He
                    is a descriptive term applied to a person who engages in an
                    activity deemed to be an art. An artist also may be defined
                    unofficially as "a person who expresses him- or herself through
                    a medium".
                </div>
                <div className="footer">
                    <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    >
                    <i className="fab fa-twitter" />
                    </Button>
                    <Button
                    className="btn-icon btn-round ml-1"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    >
                    <i className="fab fa-facebook-square" />
                    </Button>
                    <Button
                    className="btn-icon btn-round ml-1"
                    color="dribbble"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    >
                    <i className="fab fa-dribbble" />
                    </Button>
                </div>
                </div>
            </Col>
            </Row>
        </Container>
        ),
        altText: "",
        caption: "",
        src: "2"
    }
];

const Projects:React.FC = () => {
    const [activeIndex , setActiveIndex] = useState<number>(0);
    const [animating , setAnimating] = useState<boolean>(false);
    const onExiting = () => {
        setAnimating(true);
    };

    const onExited = () => {
        setAnimating(false);
    };

    const next = () => {
        if (animating) return;
        const nextIndex =
        activeIndex === items.length - 1
            ? 0
            : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex =
        activeIndex === 0
            ? items.length - 1
            : activeIndex - 1;
            setActiveIndex(nextIndex);
    };

    return (
    <>
        <div className={`cd-section ${styles.default.ProjectsWrapper}`} id="teams">
            {/* ********* TEAM 1 ********* */}
            <div className="team-1">
                <Container>
                <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className={`title ${styles.default.projectName}`}>Projects</h2>
                    <h4 className={`description ${styles.default.projectDescription}`}>
                        This is the paragraph where you can write more details about
                        your team. Keep you user engaged by providing meaningful
                        information.
                    </h4>
                    </Col>
                </Row>
                <Row>
                    <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    className="carousel-team"
                    autoPlay={false}
                    >
                    {items.map((item, key) => {
                        return (
                        <CarouselItem
                            onExiting={onExiting}
                            onExited={onExited}
                            key={key}

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
                        previous();
                        }}
                        role="button"
                    >
                        <i className="tim-icons icon-minimal-left" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        data-slide="next"
                        href="#pablo"
                        onClick={e => {
                        e.preventDefault();
                        next();
                        }}
                        role="button"
                    >
                        <i className="tim-icons icon-minimal-right" />
                        <span className="sr-only">Next</span>
                    </a>
                    </Carousel>
                </Row>
                </Container>
            </div>
            {/* ********* END TEAM 1 ********* */}
        </div>{" "}
    </>
    );
    
}

export default Projects;
