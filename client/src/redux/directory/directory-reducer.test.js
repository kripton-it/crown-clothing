import directoryReducer, { INITIAL_STATE } from "./directory-reducer";

describe("directoryReducer:", () => {
  it("should return the initial state", () => {
    expect(directoryReducer().sections).toEqual(INITIAL_STATE.sections);
  });
});
