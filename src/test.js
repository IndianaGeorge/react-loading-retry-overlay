import React from 'react';
import ReactDOM from 'react-dom';
import { act, renderIntoDocument, Simulate } from 'react-dom/test-utils';
import TestUtils from 'react-dom/test-utils';
import LoadOverlay from 'react-loading-retry-overlay';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('LoadOverlay', () => {
  it('is truthy', () => {
    expect(LoadOverlay).toBeTruthy()
  });

  it('contains the provided content', () => {
    act(() => {
      ReactDOM.render(<LoadOverlay >content</LoadOverlay>, container);
    });
    const wrapper = container.children[0];
    const overlayParent = wrapper.children[0];
    const contentWrapper = overlayParent.children[0];
    expect(contentWrapper.textContent).toBe('content');
  });

  it('is invisible if not loading or in error state', () => {
    act(() => {
      ReactDOM.render(<LoadOverlay >content</LoadOverlay>, container);
    });
    const wrapper = container.children[0];
    const overlayParent = wrapper.children[0];
    expect(overlayParent.children.length).toBe(1);
  });

  it('Appends an overlay if loading', () => {
    act(() => {
      ReactDOM.render(<LoadOverlay loading>content</LoadOverlay>, container);
    });
    const wrapper = container.children[0];
    const overlayParent = wrapper.children[0];
    const contentWrapper = overlayParent.children[0];
    expect(overlayParent.children.length).toBe(2);
  });

  it('Appends an overlay if in error', () => {
    act(() => {
      ReactDOM.render(<LoadOverlay error>content</LoadOverlay>, container);
    });
    const wrapper = container.children[0];
    const overlayParent = wrapper.children[0];
    expect(overlayParent.children.length).toBe(2);
  });

  it('Shows spinner icon when loading', () => {
    act(() => {
      ReactDOM.render(<LoadOverlay loading>content</LoadOverlay>, container);
    });
    const wrapper = container.children[0];
    const overlayParent = wrapper.children[0];
    expect(overlayParent.children.length).toBe(2);
    const overlay = overlayParent.children[1];
    const spinner = overlay.children[0];
    expect(spinner.className).toMatch(/^Spinner/);
    expect(spinner.tagName.toUpperCase()).toBe('SVG');
  });

  it('Shows alert icon when in error', () => {
    act(() => {
      ReactDOM.render(<LoadOverlay error>content</LoadOverlay>, container);
    });
    const wrapper = container.children[0];
    const overlayParent = wrapper.children[0];
    expect(overlayParent.children.length).toBe(2);
    const overlay = overlayParent.children[1];
    const gridWrap = overlay.children[0];
    const alert = gridWrap.children[0];
    expect(alert.className).toMatch(/^Alert/);
    expect(alert.tagName.toUpperCase()).toBe('SVG');
  });

  it('Shows a retry button if in error, onRetry is available and retryEnabled is true', () => {
    const onRetry = ()=>{};
    act(() => {
      ReactDOM.render(<LoadOverlay error retryEnabled onRetry={onRetry}>content</LoadOverlay>, container);
    });
    const wrapper = container.children[0];
    const overlayParent = wrapper.children[0];
    expect(overlayParent.children.length).toBe(2);
    const overlay = overlayParent.children[1];
    const gridWrap = overlay.children[0];
    const buttonWrap = gridWrap.children[1];
    const buttonCell = buttonWrap.children[0];
    const timedButton = buttonCell.children[0];
    expect(timedButton.className).toMatch(/^TimedButton/);
    expect(timedButton.tagName.toUpperCase()).toBe('SVG');
  });

  it('Clicking the retry button fires the callback', () => {
    let retryFired = false;
    const onRetry = ()=>{retryFired = true};
    act(() => {
      ReactDOM.render(<LoadOverlay error retryEnabled onRetry={onRetry}>content</LoadOverlay>, container);
    });
    const wrapper = container.children[0];
    const overlayParent = wrapper.children[0];
    expect(overlayParent.children.length).toBe(2);
    const overlay = overlayParent.children[1];
    const gridWrap = overlay.children[0];
    const buttonWrap = gridWrap.children[1];
    act(() => {
      Simulate.click(buttonWrap);
    });
    expect(retryFired).toBe(true);
  });

  it('Shows replaced spinner icon when loading if provided', () => {
    act(() => {
      ReactDOM.render(<LoadOverlay loading spinnerIcon={<div className="findme">Loading</div>}>content</LoadOverlay>, container);
    });
    const wrapper = container.children[0];
    const overlayParent = wrapper.children[0];
    expect(overlayParent.children.length).toBe(2);
    const overlay = overlayParent.children[1];
    const customSpinnerWrap = overlay.children[0];
    const spinner = customSpinnerWrap.children[0];
    expect(spinner.className).toBe("findme");
    expect(spinner.tagName.toUpperCase()).toBe('DIV');
    expect(spinner.textContent).toBe('Loading');
  });

  it('Shows replaced alert icon when in error if provided', () => {
    act(() => {
      ReactDOM.render(<LoadOverlay error alertIcon={<div className="findme">Error</div>}>content</LoadOverlay>, container);
    });
    const wrapper = container.children[0];
    const overlayParent = wrapper.children[0];
    expect(overlayParent.children.length).toBe(2);
    const overlay = overlayParent.children[1];
    const gridWrap = overlay.children[0];
    const alert = gridWrap.children[0];
    expect(alert.className).toBe("findme");
    expect(alert.tagName.toUpperCase()).toBe('DIV');
    expect(alert.textContent).toBe('Error');
  });
})
