// @flow

'use strict';

import React, {Component} from 'react';
import './../styles/button.css';

export default class Button extends Component {
  constructor(props: any) {
    super(props);
  }

  render(): React$Element<any> {
    const {className, value, ...props}: {className: string, value: string, props: Array<any>} = this.props;
    const classes: Array<string> = ['UIForm-Button'];

    if (className) classes.push(className);

    return (
        <button ref='button' className={classes.join(' ')} {...props}>{value}</button>
    );
  }
}
