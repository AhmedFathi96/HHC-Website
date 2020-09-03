import React from 'react';
import * as styles from './styles.module.css';
import { Row, Col } from 'reactstrap';
const Values: React.FC = () =>{

    return(
        <div className={`cd-section ${styles.default.valuesWrapper}`} id="features">

    
            {/* ********* FEATURES 5 ********* */}
            <div className="features features-5">
                <Row className="align-items-center">
                <Col lg="5">
                    <div className="featured-image">
                    <img
                        alt="..."
                        height="600"
                        src={require("../../../../assets/img/pawel-nolbert.jpg")}
                        width="500"
                    />
                    </div>
                </Col>
                <Col className="mt-md-6" lg="7">
                    <h1 className={`title ${styles.default.projectName}`}>Company values</h1>
                    <Row>
                    <Col lg="6" md="6">
                        <div className={`info ${styles.default.valueInfo}`}>
                        <h4 className={`info-title ${styles.default.projectInfo}`}>Honest</h4>
                        <p className={`description ${styles.default.projectDescription}`}>
                            Gain access to the demographics, psychographics
                        </p>
                        </div>
                        <div className={`info ${styles.default.valueInfo}`}>
                        <h4 className={`info-title ${styles.default.projectInfo}`}>Efficient</h4>
                        <p className={`description ${styles.default.projectDescription}`}>
                            Gain access to the demographics, psychographics
                        </p>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className={`info ${styles.default.valueInfo}`}>
                        <h4 className={`info-title ${styles.default.projectInfo}`}>Helpful</h4>
                        <p className={`description ${styles.default.projectDescription}`}>
                            Gain access to the demographics, psychographics
                        </p>
                        </div>
                        <div className={`info ${styles.default.valueInfo}`}>
                        <h4 className={`info-title ${styles.default.projectInfo}`}>Quality</h4>
                        <p className={`description ${styles.default.projectDescription}`}>
                            Gain access to the demographics, psychographics
                        </p>
                        </div>
                    </Col>

                    </Row>
                    <Row>
                    <Col lg="6" md="6">
                        <div className={`info ${styles.default.valueInfo}`}>
                        <h4 className={`info-title ${styles.default.projectInfo}`}>Honest</h4>
                        <p className={`description ${styles.default.projectDescription}`}>
                            Gain access to the demographics, psychographics
                        </p>
                        </div>
                        <div className={`info ${styles.default.valueInfo}`}>
                        <h4 className={`info-title ${styles.default.projectInfo}`}>Efficient</h4>
                        <p className={`description ${styles.default.projectDescription}`}>
                            Gain access to the demographics, psychographics
                        </p>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className={`info ${styles.default.valueInfo}`}>
                        <h4 className={`info-title ${styles.default.projectInfo}`}>Helpful</h4>
                        <p className={`description ${styles.default.projectDescription}`}>
                            Gain access to the demographics, psychographics
                        </p>
                        </div>
                        <div className={`info ${styles.default.valueInfo}`}>
                        <h4 className={`info-title ${styles.default.projectInfo}`}>Quality</h4>
                        <p className={`description ${styles.default.projectDescription}`}>
                            Gain access to the demographics, psychographics
                        </p>
                        </div>
                    </Col>

                    </Row>
                
                </Col>
                </Row>
            </div>
            {/* ********* END FEATURES 5 ********* */}
        </div>
    )
}

export default Values;