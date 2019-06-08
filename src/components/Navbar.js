import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import homeIcon from "../assets/img/home.png";
import Image from "./Image";
import { getValue } from "../services/helpers";
import { BigText } from "./Text";
import { colors } from "../styles";

const NavbarStyled = styled.View`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "80px")};
  background-color: ${colors.backgroundLight};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;

const Home = styled.View`
  height: 50px;
  width: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: absolute;
  right: 0;
`;

class Navbar extends PureComponent {
  render() {
    const { Children, navigateInternal, history, ...rest } = this.props;

    const leftRender = () => {
      return (
        <TouchableOpacity onPress={() => history.goBack()}>
          <BigText fontSize={getValue(40)}>Back</BigText>
        </TouchableOpacity>
      );
    };

    const rightRender = () => {
      return !!navigateInternal && (
        <Home>
          <TouchableOpacity onPress={() => history.push('/')}>
            <Image
              source={homeIcon}
              width={getValue(50)}
              height={getValue(50)}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Home>
      )
    }

    return (
      <NavbarStyled {...rest}>
        {leftRender()}
        {rightRender()}
      </NavbarStyled>
    )
  }

};

export default Navbar;
