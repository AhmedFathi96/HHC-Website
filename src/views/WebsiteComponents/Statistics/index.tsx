import React from 'react';
import * as styles from './styles.module.css';
import { Row, Col, Container } from 'reactstrap';
import SingleCard from './SingleCard';

const Statistics: React.FC = () =>{

    return(
        
        <div className={`${styles.default.wrapper}`}>
            <Container>
                <Row>
                    <Col lg="3">
                        <SingleCard header="LOREM IPSUM" icon="" content="Lorem ipsum" />
                    </Col>
                    <Col lg="3">
                        <SingleCard header="LOREM IPSUM" icon="" content="Lorem ipsum" />
                    </Col>
                    <Col lg="3">
                        <SingleCard header="LOREM IPSUM" icon="" content="Lorem ipsum" />
                    </Col>
                    <Col lg="3">
                        <SingleCard header="LOREM IPSUM" icon="" content="Lorem ipsum" />
                    </Col>
                </Row> 
            </Container>

        </div>

    )
}

export default Statistics;