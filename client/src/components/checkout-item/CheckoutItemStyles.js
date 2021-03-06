import styled, { css } from "styled-components";

const columnStyles = css`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

ImageContainer.displayName = "ImageContainer";

export const ItemName = styled.span`
  ${columnStyles}
`;

ItemName.displayName = "ItemName";

export const ItemQuantityContainer = styled.div`
  display: flex;
  ${columnStyles}
`;

export const ItemPrice = styled.span`
  ${columnStyles}
`;

ItemPrice.displayName = "ItemPrice";

export const ItemQuantityArrow = styled.div`
  cursor: pointer;
`;

export const ItemQuantityValue = styled.span`
  margin: 0 10px;
`;

ItemQuantityValue.displayName = "ItemQuantityValue";

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

RemoveButton.displayName = "RemoveButton";
