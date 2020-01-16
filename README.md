# react-loading-retry-overlay

> The last loading indicator you'll ever need

[![NPM](https://img.shields.io/npm/v/react-loading-retry-overlay.svg)](https://www.npmjs.com/package/react-loading-retry-overlay)

## What is this?
 A loading overlay to cover a widget while it loads data. You may use several of them at the same time independently.
 [Try the demo at Github.](https://IndianaGeorge.github.io/react-loading-retry-overlay)

## Features
- Support for Chrome, Firefox, Edge & even Internet Explorer 11
- A translucent overlay with a spinner, invisible when everything is loaded
- An error alert for when something goes wrong
- A configurable retry button with a timer, for when retrying makes sense
- Customizable background, icons and button colors via passing CSS class names
- Bundled original SVG icons

## Install

```bash
npm install --save react-loading-retry-overlay
```

## Usage

```jsx
import React, { Component } from 'react'

import LoadOverlay from 'react-loading-retry-overlay'

class Example extends Component {
  render () {
    return (
      <LoadOverlay loading>
        your jsx here
      </LoadOverlay>
    )
  }
}
```

## Props
- **loading**: if true, the overlay and spinner will be shown
- **error**: if true and not loading, the overlay and alert icon will be shown
- **retryEnabled**: if true and the onRetry prop is also passed, the retry button will be shown
- **onRetry**: a function with no parameters that will be called when the retry button is clicked
- **timeout**: the number (string or otherwise) of seconds to countdown before retrying.
- **manualRetry**: if true, retry only happens when the button is clicked
- **spinnerIcon**: pass your own jsx here to be used as a spinner
- **alertIcon**: pass your own jsx here to be used as an alert icon
- **retryText**: pass your own text to replace the contents of the retry button
- **colorClass**: set color and background-color in a CSS class and pass the class name here to be used only in the overlay.
- **errorColorClass**: set color in a CSS class and pass the name here to be used only inthe alert icon and retry button.
- **className**: you may pass an additional className to be used on top of everything.

## Caveats
- Automatic retry doesn't work in IE11. No countdown animation either.
- icons and button sizes are fixed, because IE11 likes it that way.
- **retryText** is overlaid on top of the button, so the button is a fixed size (in **rem**s)
- There's no error message UI. This is meant to be used independently in every widget, where there's usually no space, but you **could** replace the alert icon with a message.
- No handling of actual requests, it's UI only.

## License

MIT © [IndianaGeorge](https://github.com/IndianaGeorge)
