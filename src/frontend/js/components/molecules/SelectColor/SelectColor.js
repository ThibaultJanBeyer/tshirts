import React from 'react';
import PropTypes from 'prop-types';

import help from "components/themes/helpers.css";

import style from './SelectColor.css';

class SelectColor extends React.Component {
  constructor(props) {
    super(props);

    // @TODO add store state from backend
    this.state = {
      color: this.props.checked
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    // @TODO should also change the url query
    const color = ev.target.value;
    this.setState({
      color
    });
  }

  render() {
    const Colors = this.props.colors.map(color => {
      const checked = color.key === this.state.color;
      const dark = color.hex < "#777";

      return (
        <label  key={color.key}
                className={
                  `${
                    style["SelectColor__element"]
                    } ${
                    (checked) ? style["SelectColor__element--checked"] : ""
                  }`
                }
                style={{ color: (dark) ? "#fff" : "#000" }} >

          <input  type="radio"
                  className={help["visuallyhidden"]}
                  name="color"
                  onChange={this.handleChange}
                  value={color.key} />
          <span className={style["SelectColor__color"]}
                style={{
                  background: color.hex,
                  color: color.hex }}>
            {color.key}
          </span>

        </label>
      );
    }, this);

    return (
      <fieldset role="group" aria-labelledby="color" className={style["SelectColor"]}>
        <legend id="color">Color</legend>
        {Colors}
      </fieldset>
    );
  }
}

SelectColor.defaultProps = {
  colors: [
    {
      key: "white",
      hex: "#fff"
    },
    {
      key: "black",
      hex: "#000"
    },
    {
      key: "red",
      hex: "#f00"
    },
    {
      key: "green",
      hex: "#0f0"
    },
    {
      key: "blue",
      hex: "#00f"
    },
    {
      key: "teal",
      hex: "#0ff"
    },
    {
      key: "yellow",
      hex: "#ff0"
    }
  ]
};

SelectColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object),
  checked: PropTypes.string  // selected color
};

export default SelectColor;