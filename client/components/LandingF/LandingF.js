
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './LandingF.scss';
import logo from '../../images/logo-home.png';
import facebook from '../../images/facebook.png';
import linkedIn from '../../images/linked-in.png';
import pininterest from '../../images/pininterest.png';
import twitter from '../../images/twitter.png';
import c3nonprofit from '../../images/501-c-3-nonprofit.png';


class Footer extends React.Component {
  render(){
    return (
      <div className={styles.container}>
        <div className={styles.column1}>
          <img src={logo} alt="Call to code logo" className={styles.logoHome} />
          <p><img src={c3nonprofit} className="nonProfit" /></p>
        </div>


        <div className={styles.column2}>
          <ul className={styles.list}>
            <li className={styles.product}>Product</li>
            <li className={styles.listItems}>Popular</li>
            <li className={styles.listItems}>Trending</li>
            <li className={styles.listItems}>Catalog</li>
          </ul>
        </div>

        <div className={styles.column3}>
          <ul className={styles.list}>
            <li className={styles.company}>Company</li>
            <li className={styles.listItems}>Press</a></li>
            <li className={styles.listItems}>Releases</li>
            <li className={styles.listItems}>Mission</li>
            <li className={styles.listItems}>Strategy</li>
            <li className={styles.listItems}>Works</li>
          </ul>
        </div>

        <div className={styles.column4}>
          <p className={styles.followUS}>FOLLOW US</p>
          <div className={styles.socialMedia}>
            <a href="#"><img src={facebook} alt="facebook logo" className={styles.facebook} /></a>
            <a href="#"><img src={twitter} alt="twitter logo" className={styles.twitter} /></a>
            <a href="#"><img src={linkedIn} alt="linkedin logo" className={styles.linkedIn} /></a>
            <a href="#"><img src={pininterest} alt="pininterest logo" className={styles.pininterest} /></a>
        </div>
        </div>
      </div>
    )
  }
};


export default Footer
