import styled from "styled-components";
import CustomButton from "../custom-button/CustomButton";

export const CollectionItemContainer = styled.div`
  position: relative;
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.7;
      transform: scale(1);
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionPrice = styled.span`
  width: 10%;
`;

export const AddButton = styled(CustomButton)`
  position: absolute;
  bottom: 50px;
  width: 80%;
  opacity: 0;
  transform: scale(0.3);
  transition: all 0.5s;
`;
