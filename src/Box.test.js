import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Box from "./Box";


it("renders using shallow", function() {
    shallow(<Box />);
});


it("matches snapshot", function() {
    let wrapper = shallow(<Box />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});