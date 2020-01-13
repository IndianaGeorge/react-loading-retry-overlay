import React, { Component } from 'react';

import LoadOverlay from 'react-loading-retry-overlay';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.mayRetryD = true;
    this.attemptsD = 0;
    this.state = {
      loadingD: false,
      loadingF: false,
    };
  }
  onRetryD() {
    this.attemptsD++;
    console.log(`Retry #${this.attemptsD}`);
    if (this.attemptsD>3) {
      this.mayRetryD = false;
    }
    this.setState({...this.state, loadingD:true});
    setTimeout(() => {
      this.setState({...this.state, loadingD:false});
    }, 5000);
  }

  onRetryF() {
    this.setState({...this.state, loadingF:true});
  }
  
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
        <LoadOverlay loading={this.state.loadingD} error retryEnabled={this.mayRetryD} onRetry={this.onRetryD.bind(this)} className="blockD">
          <h2>
            A title
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales quam in consequat dictum. Vivamus laoreet ipsum in imperdiet maximus. Donec aliquet id sem sit amet pharetra. Nunc in sem.
          </p>
        </LoadOverlay>
        <LoadOverlay loading colorClass="CustomColor" errorColorClass="CustomErrorColor" className="blockE">
          <h2>
            A title
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales quam in consequat dictum. Vivamus laoreet ipsum in imperdiet maximus. Donec aliquet id sem sit amet pharetra. Nunc in sem.
          </p>
        </LoadOverlay>
        <LoadOverlay error loading={this.state.loadingF} timeout="15" retryEnabled onRetry={this.onRetryF.bind(this)} retryText="Reintentar" colorClass="CustomColor" errorColorClass="CustomErrorColor" className="blockF">
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
