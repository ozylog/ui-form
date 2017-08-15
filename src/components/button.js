'use strict';

import React, {Component} from 'react';
import injectSheet from 'react-jss';

const styles: Object = {
  button: {
    border: 'none',
    borderRadius: '3px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    padding: '7px 9px',
    textAlign: 'center',
    '&:focus': {
      outline: 0
    },
    '&:disabled': {
      cursor: 'not-allowed'
    }
  }
};

@injectSheet(styles)
export default class Button extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {className, classes, value, ...props}: {className: string, classes: Object, value: string, props: Array<any>} = this.props;
    const classNameArr: Array<string> = [classes.button];

    if (className) classNameArr.push(className);

    return (
        <button ref='button' className={classNameArr.join(' ')} {...props}>{value}</button>
    );
  }
}
