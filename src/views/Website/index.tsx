
import React, { useState, useEffect } from 'react';
import ScrollNavbar from '../../components/Navbars/ScrollNavbar'
import Slider from '../WebsiteComponents/Slider';
import ContactUs from '../WebsiteComponents/ContactUs'
import Projects from '../WebsiteComponents/Projects'
import About from '../WebsiteComponents/About';
import Group from '../WebsiteComponents/Group'
import MediaCenter from '../WebsiteComponents/MediaCenter'
import Testimonial from '../WebsiteComponents/Testimonial'
import Companies from '../WebsiteComponents/Companies';
import Statistics from '../WebsiteComponents/Statistics';
import * as styles from './styles.module.css';

const Website:React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const [topPage, setTopPage] = useState<{}>();
    const [wrapRef, setWrapRef] = useState<HTMLDivElement>();

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        
    },[topPage]);
    const handleScroll = () => {
        const { top } = (wrapRef === undefined)?{top:-999}:wrapRef.getBoundingClientRect();
        setTopPage((top - top - top));
        if ((top - top - top) > 20) {
            setIsActive(true);
        }
        if ((top - top - top) <= 20) {
            setIsActive(false);
        }
    }
    
    const setWrapRefHandler = (ref:any) => {
        setWrapRef(ref)
    }
        return (
        <div className={`${styles.default.wrapper}`}>
            {/* Navbar START */}
            <ScrollNavbar active={isActive} />

            <div ref={setWrapRefHandler}>   
                <div className="section-space" />
                    <section id='home'>
                        <Slider />
                    </section>
                    
                    <section id='about'>
                        <About />
                    </section>
                    
                    <section id='media'>
                        <MediaCenter />
                    </section>

                    <section id='projects'>
                        <Projects />
                    </section>
                    
                    <section id='group'>
                        <Group />
                    </section>
                    
                    <section id='projects'>
                        <Projects />
                    </section>
                    
                    <section id='companies'>
                        <Companies />
                    </section>

                    <section id='testimonial'>
                        <Testimonial />
                        
                        <Statistics />
                    </section>

                    <section id='contact'>
                        <ContactUs />
                    </section>
                    
            
                    
                    
            </div>
        </div>
        );
}

export default Website;