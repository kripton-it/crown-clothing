import React from "react";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";

import "./ShopPage.styles.scss";

import SHOP_DATA from "./collections";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...restProps }) => (
          <CollectionPreview key={id} {...restProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
