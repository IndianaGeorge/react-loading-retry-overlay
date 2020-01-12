import React from 'react'
import PropTypes from 'prop-types'

import Spinner from './icons/Spinner';

import styles from './styles.css';

export default (props) => {
  return (
    <div className={props.className}>
      <div className={styles.OverlayParent}>
        <div className={styles.Content}>
        {props.children}
        </div>
        {
          (!props.loading && !props.error)?null:
            <div className={styles.Overlay}>
            {
              props.loading?
                <Spinner className={styles.GridCentered}/>
              :(
                props.error?
                  <div className={styles.GridCentered}>error</div>
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
