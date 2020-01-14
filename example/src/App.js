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

  onRetryC() {
    console.log("retried C");
  }
  
  render () {
    return (
      <div className="container">
        <LoadOverlay className="blockA">
          <h2>
            Showing content
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales quam in consequat dictum. Vivamus laoreet ipsum in imperdiet maximus. Donec aliquet id sem sit amet pharetra. Nunc in sem.
          </p>
        </LoadOverlay>
        <LoadOverlay loading className="blockB">
          <h2>
            loading is true
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales quam in consequat dictum. Vivamus laoreet ipsum in imperdiet maximus. Donec aliquet id sem sit amet pharetra. Nunc in sem.
          </p>
        </LoadOverlay>
        <LoadOverlay error alertIcon={<div>Alert</div>} retryEnabled onRetry={this.onRetryC.bind(this)} manualRetry className="blockC">
          <h2>
            error is true, replaced alertIcon with text, manual retry only
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales quam in consequat dictum. Vivamus laoreet ipsum in imperdiet maximus. Donec aliquet id sem sit amet pharetra. Nunc in sem.
          </p>
        </LoadOverlay>
        <LoadOverlay loading={this.state.loadingD} error retryEnabled={this.mayRetryD} onRetry={this.onRetryD.bind(this)} className="blockD">
          <h2>
            Error true, controlled loading and retryEnabled, onRetry function
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales quam in consequat dictum. Vivamus laoreet ipsum in imperdiet maximus. Donec aliquet id sem sit amet pharetra. Nunc in sem.
          </p>
        </LoadOverlay>
        <LoadOverlay loading spinnerIcon={<div>Loading</div>} errorColorClass="CustomErrorColor" className="blockE">
          <h2>
            Replaced spinnerIcon with text
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales quam in consequat dictum. Vivamus laoreet ipsum in imperdiet maximus. Donec aliquet id sem sit amet pharetra. Nunc in sem.
          </p>
        </LoadOverlay>
        <LoadOverlay error loading={this.state.loadingF} timeout="15" retryEnabled onRetry={this.onRetryF.bind(this)} retryText="Reintentar" colorClass="CustomColor" errorColorClass="CustomErrorColor" className="blockF">
          <h2>
            Error true, controlled loading, 15s timeout, retry func, customColor, customErrorColor
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales quam in consequat dictum. Vivamus laoreet ipsum in imperdiet maximus. Donec aliquet id sem sit amet pharetra. Nunc in sem.
          </p>
        </LoadOverlay>
      </div>
    )
  }
}
