import collections from "./collections";

const INITIAL_STATE = {
  collections
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // если когда-то появятся действия - у нас уже всё готово
    default:
      return state;
  }
};

export default shopReducer;
