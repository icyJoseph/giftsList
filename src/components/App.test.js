import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("initializes the `state` with an empty lists of gifts", () => {
    expect(app.state().gifts).toEqual([]);
  });

  it("adds a new gift to `state` the `add gift` button", () => {
    // Find the `add gift` button by className (.className) of jsx tag
    // and then simulate a click
    app.find(".btn-add").simulate("click");
    // Once you add a gift the state.gifts is not []
    expect(app.state().gifts).toEqual([{ id: 1 }]);
  });

  it("adds a new gift to the rendered list when clicking the `add gift` button", () => {
    // HACK WARNING: here we are clicking the button for a second time!
    // therefore there will be two items in the gift list
    app.find(".btn-add").simulate("click");
    expect(app.find(".gift-list").children().length).toEqual(2);
  });
});
