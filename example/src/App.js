import React, { Component } from 'react';

import LoadOverlay from 'react-loading-retry-overlay';

export default class App extends Component {
  render () {
    return (
      <div className="container">
        <LoadOverlay className="blockA">
          <h2>
            A title
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales quam in consequat dictum. Vivamus laoreet ipsum in imperdiet maximus. Donec aliquet id sem sit amet pharetra. Nunc in sem.
          </p>
        </LoadOverlay>
        <LoadOverlay loading className="blockB">
          <h2>
            A title
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales quam in consequat dictum. Vivamus laoreet ipsum in imperdiet maximus. Donec aliquet id sem sit amet pharetra. Nunc in sem.
          </p>
        </LoadOverlay>
        <LoadOverlay error className="blockC">
          <h2>
            A title
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales quam in consequat dictum. Vivamus laoreet ipsum in imperdiet maximus. Donec aliquet id sem sit amet pharetra. Nunc in sem.
          </p>
        </LoadOverlay>
        <LoadOverlay error retry className="blockD">
          <h2>
            A title
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales quam in consequat dictum. Vivamus laoreet ipsum in imperdiet maximus. Donec aliquet id sem sit amet pharetra. Nunc in sem.
          </p>
        </LoadOverlay>
      </div>
    )
  }
}
