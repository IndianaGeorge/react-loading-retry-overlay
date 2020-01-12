import React from 'react'
import PropTypes from 'prop-types'

import Spinner from './icons/Spinner';
import Alert from './icons/Alert';
import styles from './styles.css';

export default (props) => {
  console.log (styles);
  return (
    <div className={props.className}>
      <div className={styles.OverlayParent}>
        <div className={styles.Content}>
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
                  <Alert className={`${styles.GridCentered} ${props.errorColorClass?props.errorColorClass:styles.ErrorColorClass}`} />
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
