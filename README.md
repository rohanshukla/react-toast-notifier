# <span style="color:#ff8333">react-toast-notifier</span> ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

A simple and easy to use toast notification module for react.

## Installation

This is a [React.js](https://reactjs.org/) module available through the
[npm registry](https://www.npmjs.com/).<br />
Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install react-toast-notifier
```

## Example & Usage (Success)
```js
import React, { Fragment } from 'react';
import Notification, { notifier } from 'react-toast-notifier';

// for success message
const NotificationButton = () => {
  return (
    <Fragment>
      <Notification />
      <button onClick={() => {
        notifier({ type: "success", message: "Success message", autoDismissTimeout:5000 });
      }}>Toast</button>
    </Fragment>
  );
};

export default NotificationButton;
```

## Example & Usage (Error)
```js
import React, { Fragment } from 'react';
import Notification, { notifier } from 'react-toast-notifier';

// for error message
const NotificationButton = () => {
  return (
    <Fragment>
      <Notification />
      <button onClick={() => {
        notifier({ type: "error", message: "Error message", autoDismissTimeout:5000 });
      }}>Toast</button>
    </Fragment>
  );
};

export default NotificationButton;
```

## Example & Usage (Warning)
```js
import React, { Fragment } from 'react';
import Notification, { notifier } from 'react-toast-notifier';

// for warning message
const NotificationButton = () => {
  return (
    <Fragment>
      <Notification />
      <button onClick={() => {
        notifier({ type: "warning", message: "Warning message" });
      }}>Toast</button>
    </Fragment>
  );
};

export default NotificationButton;
```

## Note
* autoDismissTimeout default time is 4000
* Available types : ["success", "warning", "error"]

## Author
Rohan Shukla [GitHub](https://github.com/shuklarohan) [LinkedIn](https://www.linkedin.com/in/shuklarohan)

## License
© Licensed under the [MIT License](LICENSE).