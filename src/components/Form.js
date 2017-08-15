'use strict';

import React, {Component} from 'react';

type PropsType = {
  className: string,
  children?: Array<any>,
  props: Array<any>
};

export default class Form extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {className, children, ...props}: PropsType = this.props;
    const classes: Array<string> = ['UIForm'];

    if (className) classes.push(className);

    return (
      <form className={classes.join(' ')} {...props}>
        {children}
      </form>
    );
  }
}
