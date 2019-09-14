import sections from "./sections";

export const INITIAL_STATE = {
  sections
};

const directoryReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    // если когда-то появятся действия - у нас уже всё готово
    default:
      return state;
  }
};

export default directoryReducer;
