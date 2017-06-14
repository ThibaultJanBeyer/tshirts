import React from "react";
import PropTypes from "prop-types";

import styles from "./InputEmail.css";
import { theme } from "components";

class InputEmail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      valid: null,
      message: this.props.message
    };

    this.checkMail = this.checkMail.bind(this);
  }

  checkMail(event) {
    const mail = event.target.value;

    if(!event.target.checkValidity() || mail === '') {
      this.setState({
        value: event.target.value,
        valid: false,
        message: '[Please check your email address]'
      });
      return false;
    }

    // @TODO: check if email address already exists

    this.props.onChange(event.target.value);
    this.setState({
      value: event.target.value,
      valid: true,
      message: ''
    });
  }

  render() {
    const classNames = {
      true: styles['InputEmail--valid'],
      false: styles['InputEmail--invalid'],
      null: ''
    };

    console.log("rerender", classNames, classNames[this.state.valid], this.state.valid);

    return (
      <label className={`${styles["InputEmail"]} ${classNames[this.state.valid]}`}>
        Email:
        <span className={styles["InputEmail__message"]}>{this.state.message}</span>
        <input className={theme['input']}
              name="email"
              type="email"
              placeholder="mail@example.com"
              onChange={this.checkMail}
              value={this.state.value} />
      </label>
    );
  }
}

InputEmail.propTypes = {
  onChange: PropTypes.func.isRequired,
  message: PropTypes.string
};

export default InputEmail;
