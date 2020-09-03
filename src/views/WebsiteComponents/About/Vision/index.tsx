import React from 'react';
import * as styles from './styles.module.css';
import { Row, Col } from 'reactstrap';
import SingleCard from './SingleCard';

const Vision: React.FC = () =>{

    return(
        
        <div className={`${styles.default.wrapper}`}>
            <h2 className={styles.default.titleHeader}>
                our vision
            </h2>
            <Row>
                <Col lg="3">
                    <SingleCard header="LOREM IPSUM" icon="" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis." />
                </Col>
                <Col lg="3">
                    <SingleCard header="LOREM IPSUM" icon="" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis." />
                </Col>
                <Col lg="3">
                    <SingleCard header="LOREM IPSUM" icon="" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis." />
                </Col>
                <Col lg="3">
                    <SingleCard header="LOREM IPSUM" icon="" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis." />
                </Col>
            </Row>
        </div>

    )
}

export default Vision;