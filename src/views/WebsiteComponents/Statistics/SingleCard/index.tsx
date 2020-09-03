import React from 'react';
import * as styles from './styles.module.css';

interface IProps{
    header:string;
    content:string;
    icon:string;
}

const SingleCard: React.FC<IProps> = (props) =>{
    const {content,header,icon} = props;
    return(
        
        <div className={`${styles.default.wrapper}`}>
            
                <img
                alt="..."
                className={`d-block ${styles.default.image}`}
                src={require(`../../../../assets/img/bitcoin.png`)}
                />

                <h2 className={styles.default.titleHeader}>
                    {header}
                </h2>
                <p className={styles.default.content}>
                    {content}
                </p>
        </div>

    )
}

export default SingleCard;