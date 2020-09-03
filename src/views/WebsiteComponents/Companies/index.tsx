import React from 'react';
import * as styles from './styles.module.css';
import { Row, Col, Container } from 'reactstrap';
import SingleCard from './SingleCard';

const Companies: React.FC = () =>{

    return(
        
        <div className={`${styles.default.wrapper}`}>
            <h2 className={styles.default.titleHeader}>
                our companies
            </h2>
            <Container>
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
            </Container>

        </div>

    )
}

export default Companies;