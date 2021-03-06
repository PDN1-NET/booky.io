import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../label';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { onChange } = this.props;

    onChange && onChange({
      name: event.target.name,
      checked: event.target.checked
    });
  }

  render() {
    const { label, className, id, name, value, checked, tabIndex } = this.props;

    return (
      <div className={ classNames('checkbox', className && className) }>
        <input
          type="checkbox"
          id={ id }
          name={ name }
          className="checkbox__input"
          value={ value }
          checked={ checked }
          onChange={ this.handleInputChange }
          tabIndex={ tabIndex }
        />
        { label && <Label htmlFor={ id } className="checkbox__label">{ label }</Label> }
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  tabIndex: PropTypes.string
};
