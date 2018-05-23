import React from 'react'
import styled from "styled-components";
import COLORS from "../../constants/colors";

const AlarmStyle = styled.div`
  border: 1px solid ${COLORS.RED};
  font-size: 1.2em;
  margin-bottom: 1em;
  padding: 1em 2em;
  color: ${COLORS.WHITE}
  background-color: ${COLORS.RED}
`;

class Alarm extends React.PureComponent {

    render(){
        return (
            <AlarmStyle>
                {this.props.children}
            </AlarmStyle>
        )
    }
}

export default Alarm
