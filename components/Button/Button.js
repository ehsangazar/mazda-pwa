import React from 'react'
import styled from "styled-components";
import COLORS from "../../constants/colors";

const ButtonStyle = styled.button`
  border: 1px solid ${COLORS.RED};
  font-size: 2em;
  margin-bottom: 1em;
  transition-duration: 100ms;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: inset 0 0 999em rgba(0, 0, 0, 0.1);
  }
  &:active,
  &.active {
    box-shadow: inset 0 0 999em rgba(0, 0, 0, 0.2);
  }
`;

class Button extends React.PureComponent {
    handleKeyPress = event => {
      if (event.charCode === 32 || event.charCode === 13) {
        event.preventDefault();
        event.target.click();
      }
    }

    render(){
        return (
            <ButtonStyle
              role="button"
              tabIndex={0}
              {...this.props}
            >
                {this.props.children}
            </ButtonStyle>
        )
    }
}

export default Button
