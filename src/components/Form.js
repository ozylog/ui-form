// @flow

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

  render(): React$Element<any> {
    const {className, children, ...props}: PropsType = this.props;
    const classes: Array<string> = ['UIForm'];

    if (className) classes.push(className);

    return (
      <Form className={classes.join(' ')} {...props}>
        {children}
      </Form>
    );
  }
}
