import React from 'react';
import styles from './hero.module.css'


export const Hero = () => {
    return (
    
        <div className={styles.box}>
                <div className={styles.box_inner}>
                    <div className={styles.tex}>TEXT</div>
                    <div className="text">SEARCH BAR</div>
                    <div className="text">
                        <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off"/>
                        <label className="btn btn-outline-primary" for="btncheck1">1</label>
                    </div>
                </div>
        </div>
        
    );
}