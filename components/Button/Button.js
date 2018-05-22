import React from 'react'
import styled from "styled-components";
import COLORS from "../../constants/colors";

const ButtonStyle = styled.button`
  border: 1px solid ${COLORS.RED}
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
