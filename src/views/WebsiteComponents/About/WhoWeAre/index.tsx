import React from 'react';
import * as styles from './styles.module.css';
const WhoWeAre: React.FC = () =>{

    return(
        
        <div className={`${styles.default.wrapper}`}>
            <div className={styles.default.leftSection}>
                <h2 className={styles.default.titleHeader}>
                    Who we are?
                </h2>
                <p className={styles.default.content}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis.
                </p>
            </div>
            <div className={styles.default.rightSection}>
                <img
                alt="..."
                className="d-block"
                src={require("../../../../assets/img/bg8.jpg")}
                />
            </div>
        </div>

    )
}

export default WhoWeAre;