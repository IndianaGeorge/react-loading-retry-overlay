import React from 'react';

import styles from './Spinner.module.css';

export default (props) => 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.834 179.834" preserveAspectRatio="xMidYMid meet" className={styles.Spinner + (props.className?(' '+props.className):'')}>
  <g fill="none" stroke="#000" transform="translate(-17.281 -51.977)">
    <circle cx="107.199" cy="141.894" r="87.417" strokeWidth="5" className={styles.Arc}/>
    <circle cx="107.199" cy="141.894" r="87.417" strokeWidth="2"/>
  </g>
</svg>
