import React from 'react';

import styles from './TimedButton.module.css';

export default (props) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.982 70.631" className={styles.TimedButton} onAnimationEnd={props.onAnimationEnd}>
    <g fill="none" stroke="currentColor" strokeLinejoin="round">
      <path d="M16.621 2.5c-3.453 0-6.703 1.032-9.35 3.074C4.625 7.616 2.5 10.991 2.5 14.906v40.819c0 3.915 2.125 7.29 4.771 9.332 2.647 2.042 5.897 3.073 9.35 3.074H178.357c3.454 0 6.704-1.032 9.352-3.074 2.648-2.042 4.774-5.416 4.773-9.332V14.904c0-3.915-2.126-7.288-4.773-9.33-2.648-2.042-5.898-3.074-9.352-3.074H16.621z" />
      <path className={styles.TimerStroke} strokeWidth="5" d="M97.489 2.5H16.621c-3.453 0-6.703 1.032-9.35 3.074C4.625 7.616 2.5 10.991 2.5 14.906v40.819c0 3.915 2.125 7.29 4.771 9.332 2.647 2.042 5.897 3.073 9.35 3.074H178.357c3.454 0 6.704-1.032 9.352-3.074 2.648-2.042 4.774-5.416 4.773-9.332V14.904c0-3.915-2.126-7.288-4.773-9.33-2.648-2.042-5.898-3.074-9.352-3.074H97.489z" />
    </g>
  </svg>
