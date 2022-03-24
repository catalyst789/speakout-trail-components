import React from 'react';
import classes from './Header.module.css';
import videoIcon from '../../images/videoIcon.png'
import plusIcon from '../../images/add_black_24dp (3) 1.png';
import downAero from '../../images/down aero.png';

function Header() {
  return (
    <>
      <div className={classes.background}>
        <div className={classes.overlayContents}>
          <div className={classes.info}>
            <div className={classes.title}>Speakout</div>
            <div className={classes.subHeading}>Unlimited, end to end encrypted, private video calls, right in your browser, powered by Ziroh Labs.</div></div>
          <div className={classes.buttonsMeeting}>
            <a style={{textDecoration:"none"}} href="#"><div className={classes.startNewMeeting}>
            <img className={classes.videoImg} src={videoIcon} alt="" />
            <span className={classes.spanStartMeeting}>Start new meeting</span>
            <img className={classes.dropDown} src={downAero} alt="" />
            <div className={classes.startNewOptions}>
            <span>Start meeting </span>
            <div className={classes.speratorLine}></div>
            <span>Create link for later</span>
            </div>
          </div></a>
          
            <a style={{textDecoration:"none"}} href="#">
            <div className={classes.JoinAMeeting}>
              <img className={classes.plusImg} src={plusIcon} alt="" />
              <span className={classes.spanJoinMeeting}>Join a meeting</span>
            </div></a></div>
        </div>
      </div>
    </>
  )
}

export default Header;