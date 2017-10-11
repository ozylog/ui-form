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
    padding: '9px 11px',
    width: '100%',
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
    const {className, classes, sheet, ...props}: {className: string, classes: Object, sheet: Object, props: Array<any>} = this.props;
    const classNameArr: Array<string> = [];

    if (classes && sheet) classNameArr.push(classes.input);
    if (className) classNameArr.push(className);

    return (
      <input ref='input' className={classNameArr.join(' ')} {...props} />
    );
  }
}
