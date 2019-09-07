import React from "react";

import Spinner from "../../components/spinner/spinner";

const WithSpinner = Component => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <Component {...otherProps} />;
};

export default WithSpinner;
