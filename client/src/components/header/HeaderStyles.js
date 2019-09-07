import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    padding: 10px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const LogoElement = styled(Logo)`
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavigationContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavigationItem = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
`;
