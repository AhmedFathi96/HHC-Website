import React  from 'react';
import * as styles from './styles.module.css';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';


const MediaCenter: React.FC = () =>{

    return (
        <div className={`cd-section ${styles.default.wrapper} `} id="blogs">
            {/* *********  Media Center 4 ********* */}
            <div className="section blogs-4" id="blogs-4">
            <Container>
                <h2 className={` title ${styles.default.galleryTitle} `}>Media Center</h2>
                <br />
                <Row className={styles.default.rowWrapper}>
                <Col className={styles.default.cardWrapper} lg="4">
                    <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                    >
                    <div
                        className="full-background"
                        style={{
                        backgroundImage:
                            "url(" +
                            require("../../../assets/img/viktor-forgacs.jpg") +
                            ")"
                        }}
                    />
                    <CardBody>
                        <div className="content-bottom">
                    
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3" className={` title ${styles.default.cardTitle} `}> Stellar Partnership</CardTitle>
                        </a>
                        </div>
                    </CardBody>
                    </Card>
                </Col>
                <Col className={styles.default.cardWrapper} lg="4">
                    <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                    >
                    <div
                        className="full-background"
                        style={{
                        backgroundImage:
                            "url(" + require("../../../assets/img/rezaul-karim.jpg") + ")"
                        }}
                    />
                    <CardBody>
                        <div className="content-bottom">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3"  className={` title ${styles.default.cardTitle} `}> Digital Currency</CardTitle>
                        </a>
                        </div>
                    </CardBody>
                    </Card>
                </Col>
                <Col className={styles.default.cardWrapper} lg="4">
                    <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                    >
                    <div
                        className="full-background"
                        style={{
                        backgroundImage:
                            "url(" + require("../../../assets/img/pawel-nolbert.jpg") + ")"
                        }}
                    />
                    <CardBody>
                        <div className="content-bottom">
                       
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3"  className={` title ${styles.default.cardTitle} `}>Blockchain Explained</CardTitle>
                        </a>
                        </div>
                    </CardBody>
                    </Card>
                </Col>
                <Col className={styles.default.cardWrapper} lg="4">
                    <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                    >
                    <div
                        className="full-background"
                        style={{
                        backgroundImage:
                            "url(" + require("../../../assets/img/pawel-nolbert.jpg") + ")"
                        }}
                    />
                    <CardBody>
                        <div className="content-bottom">
                      
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3"  className={` title ${styles.default.cardTitle} `}>Blockchain Explained</CardTitle>
                        </a>
                        </div>
                    </CardBody>
                    </Card>
                </Col>
                <Col className={styles.default.cardWrapper} lg="4">
                    <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                    >
                    <div
                        className="full-background"
                        style={{
                        backgroundImage:
                            "url(" + require("../../../assets/img/mark-finn.jpg") + ")"
                        }}
                    />
                    <CardBody>
                        <div className="content-bottom">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3"  className={` title ${styles.default.cardTitle} `}>
                            A Robot is Your Co-Worker
                            </CardTitle>
                        </a>
                        </div>
                    </CardBody>
                    </Card>
                </Col>
                <Col className={styles.default.cardWrapper} lg="4">
                    <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                    >
                    <div
                        className="full-background"
                        style={{
                        backgroundImage:
                            "url(" + require("../../../assets/img/mark-finn.jpg") + ")"
                        }}
                    />
                    <CardBody>
                        <div className="content-bottom">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3"  className={` title ${styles.default.cardTitle} `}>
                            A Robot is Your Co-Worker
                            </CardTitle>
                        </a>
                        </div>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
            </Container>
            </div>
            {/* ********* END Media Center  4 ********* */}

    </div>
    
    );
}

export default MediaCenter;