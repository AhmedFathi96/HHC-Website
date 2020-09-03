
import React, { useState, useEffect } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import * as styles from './styles.module.css';


interface IProps{
  active:boolean
}
const getWindowDimensions =() => {
  const { innerWidth: width, innerHeight: height } = window;
  // console.log('top' , width)
  return {
      width,
      height
  };
}

const ScrollNavbar:React.FC<IProps> = (props) => {

  const [toggle , setToggle] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
      function handleResize() {
          setWindowDimensions(getWindowDimensions());
      
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);
  
  const handleClick = () =>{
      setToggle(pt => !pt);
  }
  
    return (
      <>

            {/* <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button> */}
      <div className={`${styles.default.nav} ${props.active?styles.default.affix:''}  ${toggle?styles.default.activeBack:''}`}>
            <div className={`${styles.default.container} ${styles.default.wrapper}`}>
                <div className={styles.default.logo}>
                    <div className={styles.default.navLogo}>
                      <img alt="logo" className={`${styles.default.logoImg}`} width="130px" src={require('../../assets/250_50.png')} />
                    </div>
                </div>  
                <div className={`${styles.default.main_list} ${toggle?styles.default.show_list:''}`}>

                    <ul className={styles.default.navLinks}>
                        <li className={styles.default.navItem}><AnchorLink href='#home' className={styles.default.navA}>Home</AnchorLink></li>
                        <li className={styles.default.navItem}><AnchorLink href='#about' className={styles.default.navA}>About</AnchorLink></li>
                        <li className={styles.default.navItem}><AnchorLink href='#media' className={styles.default.navA}>Media Center</AnchorLink></li>
                        <li className={styles.default.navItem}><AnchorLink href='#projects' className={styles.default.navA}>Projects</AnchorLink></li>
                        <li className={styles.default.navItem}><AnchorLink href='#group' className={styles.default.navA}>Group</AnchorLink></li>
                        <li className={styles.default.navItem}><AnchorLink href='#companies' className={styles.default.navA}>Companies</AnchorLink></li>
                        <li className={styles.default.navItem}><AnchorLink href='#testimonial' className={styles.default.navA}>Testimonial</AnchorLink></li>
                        <li className={styles.default.navItem}><AnchorLink href='#contact' className={styles.default.navA}>Contact</AnchorLink></li>

                    </ul>
                </div>
                <span className={`${styles.default.navTrigger} ${toggle?styles.default.active:''}`} onClick={handleClick}>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </div>
        </>
    ); 
}

export default ScrollNavbar;
