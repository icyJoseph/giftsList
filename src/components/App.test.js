import React from "react";
import { shallow } from "enzyme";
import App from "./App";

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
