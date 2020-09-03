import React from 'react';
import * as styles from './styles.module.css';
import Values from './Values';
import Vision from './Vision';
import WhoWeAre from './WhoWeAre';
import History from './History';

import { Container } from 'reactstrap';

const About: React.FC = () =>{

    return(
        
        <div className={`${styles.default.wrapper}`}>
            <Container>
                <WhoWeAre />
                <Vision />
                <History />
                <Values />
            </Container>
        </div>

    )
}

export default About;