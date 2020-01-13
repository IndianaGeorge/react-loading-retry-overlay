import React from 'react'
import PropTypes from 'prop-types'

import Spinner from './icons/Spinner';
import Alert from './icons/Alert';
import styles from './styles.css';
import TimedButton from './icons/TimedButton';

export default (props) => {
  return (
    <div className={props.className}>
      <div className={styles.OverlayParent}>
        <div className={styles.GridOverlap}>
        {props.children}
        </div>
        {
          (!props.loading && !props.error)?null:
            <div className={`${styles.Overlay} ${props.colorClass?props.colorClass:styles.ColorClass}`}>
            {
              props.loading?
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
                      (props.retryEnabled && props.onRetry)?
                        <div onClick={props.onRetry} className={styles.RetryButton}>
                          <div className={`${styles.GridOverlap} ${styles.GridCenterInCell}`}>
                            <TimedButton onAnimationEnd={props.onRetry} timeout={props.timeout}/>
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
        }
      </div>
    </div>
  )
}
