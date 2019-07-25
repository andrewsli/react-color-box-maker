import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import BoxList from "./BoxList";


it("renders without crashing", function () {
    shallow(<BoxList />);
});


it("matches snapshot", function () {
    let wrapper = shallow(<BoxList />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

it("adds boxes", function () {
    const boxes = [{ height: "100px", width: "100px", backgroundColor: "green"}];
    const wrapper = mount(<BoxList />);

    //test that we are starting with inital state
    wrapper.setState({ boxes });
    expect(wrapper.state().boxes).toEqual([
        { height: "100px", width: "100px", backgroundColor: "green"}
    ]);

    //test state after adding box
    wrapper.instance().addBox({ height: "50px", width: "50px", backgroundColor: "blue", key:"1"});
    expect(wrapper.state().boxes).toEqual([
        { height: "100px", width: "100px", backgroundColor: "green" },
        { height: "50px", width: "50px", backgroundColor: "blue", id: expect.any(String), key: expect.any(String) }
    ]);
})

it("finds the form and successfully creates boxes", function () {
    const wrapper = mount(<BoxList />);

    //get all our input fields
    const heightInput = wrapper.find("#height");
    const widthInput = wrapper.find("#width");
    const bgColorInput = wrapper.find("#backgroundColor");
    const form = wrapper.find("form");

    //change all our fields and submit the form
    heightInput.instance().value = "100";
    heightInput.simulate("change");

    widthInput.instance().value = "100";
    widthInput.simulate("change");

    bgColorInput.instance().value = "green";
    bgColorInput.simulate("change");

    form.simulate("submit");

    expect(wrapper.find(".box").last().html()).toContain('height: 100px; width: 100px; background-color: green;');
})