import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Spinner from './icons/Spinner';
import Alert from './icons/Alert';
import styles from './styles.css';
import TimedButton from './icons/TimedButton';
import Timer from './Timer';

const stopEvent= (event)=>{ event.stopPropagation(); event.preventDefault(); console.log(event); };

export default (props) => {
  const timer = useRef();
  useEffect(()=>{
    if (props.error && !props.loading && props.silent && props.retryEnabled && props.onRetry) {
      if (!timer.current || !timer.current.active) {
        timer.current = new Timer(props.onRetry, props.timeout?props.timeout:5);          
      }
    }
    else {
      if (timer.current && timer.current.active) {
        timer.current.stop();
      }
    }
  }, [props.error, props.loading, props.silent, props.retryEnabled, props.onRetry]);
  useEffect(()=>{
    return ()=>{
      if (timer.current && timer.current.active) {
        timer.current.stop();
      }
    }
  },[]);
  return (
    <div className={props.className}>
      <div className={styles.OverlayParent}>
        <div className={`${styles.GridOverlap} ${(!props.loading && !props.error)?null:styles.NoPointerEvents}`}>
        {props.children}
        </div>
        <div className={`${styles.Overlay} ${props.colorClass?props.colorClass:styles.ColorClass} ${(!props.loading && !props.error)?styles.HiddenOverlay:styles.ShownOverlay}`}>
          {
            (props.loading || (props.error && props.silent && props.retryEnabled && props.onRetry))?
              (
                props.spinnerIcon?
                  (<div className={styles.GridCentered}>{props.spinnerIcon}</div>)
                :
                  <Spinner className={styles.GridCentered}/>
              )
            :(
              props.error?
                <div className={`${styles.GridCentered} ${styles.AlertContainer} ${props.errorColorClass?props.errorColorClass:styles.ErrorColorClass}`}>
                  {props.alertIcon?props.alertIcon:<Alert />}
                  {
                    (props.retryEnabled && props.onRetry && !props.silent)?
                      <div onClick={props.onRetry} className={styles.RetryButton}>
                        <div className={`${styles.GridOverlap} ${styles.GridCenterInCell}`}>
                          <TimedButton onAnimationEnd={props.onRetry} timeout={props.timeout} manualRetry={props.manualRetry}/>
                        </div>
                        <div className={`${styles.GridOverlap} ${styles.GridCenterInCell}`}>
                          {props.retryText?props.retryText:'Retry'}
                        </div>
                      </div>
                    :
                      null
                  }
                </div>
              :
                null
            )
          }        
        </div>
      </div>
    </div>
  )
}
