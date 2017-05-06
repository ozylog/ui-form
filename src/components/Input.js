// @flow

'use strict';

import React, {Component} from 'react';
import './../styles/input.css';

export default class Input extends Component {
  constructor(props: any) {
    super(props);
  }

  render(): React$Element<any> {
    const {className, ...props}: {className: string, props: Array<any>} = this.props;
    const classes: Array<string> = ['UIForm-Input'];

    if (className) classes.push(className);

    return (
      <input ref='input' className={classes.join(' ')} {...props} />
    );
  }
}
