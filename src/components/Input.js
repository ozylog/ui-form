'use strict';

import React, {Component} from 'react';
import injectSheet from 'react-jss';

const styles: Object = {
  input: {
    background: '#ffffff',
    border: '1px solid #cccccc',
    borderRadius: '3px',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    padding: '7px 9px',
    '&:focus': {
      outline: 0
    }
  }
};

@injectSheet(styles)
export default class Input extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {className, classes, ...props}: {className: string, classes: Object, props: Array<any>} = this.props;
    const classNameArr: Array<string> = [classes.input];

    if (className) classNameArr.push(className);

    return (
      <input ref='input' className={classNameArr.join(' ')} {...props} />
    );
  }
}
