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
                <Spinner className={styles.GridCentered}/>
              :(
                props.error?
                  <div className={`${styles.GridCentered} ${styles.AlertContainer} ${props.errorColorClass?props.errorColorClass:styles.ErrorColorClass}`}>
                    <Alert />
                    {
                      props.retry?
                        <div onClick={props.retry?props.retry:null} className={styles.RetryButton}>
                          <div className={`${styles.GridOverlap} ${styles.GridCenterInCell}`}><TimedButton onAnimationEnd={props.retry}/></div>
                          <div className={`${styles.GridOverlap} ${styles.GridCenterInCell}`}>{props.retryText?props.retryText:'Retry'}</div>
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
