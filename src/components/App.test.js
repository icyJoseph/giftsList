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

  describe("when clicking the `add-gift` button", () => {
    const id = 1;
    beforeAll(() => {
      // Find the `add gift` button by className (.className) of jsx tag
      // and then simulate a click
      app.find(".btn-add").simulate("click");
    });

    it("adds a new gift to `state`", () => {
      // Once you add a gift the state.gifts is not []
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it("adds a new gift to the rendered list", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });

    it("creates a gift component", () => {
      expect(app.find("Gift").exists()).toBe(true);
    });

    describe("and the user wants to remove the added gift", () => {
      beforeEach(() => {
        // Access methods from app with instance
        app.instance().removeGift(id);
      });

      it("removes the gift from state", () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
