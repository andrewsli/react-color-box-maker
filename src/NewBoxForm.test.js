import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import NewBoxForm from "./NewBoxForm";


it("renders using shallow", function () {
  shallow(<NewBoxForm />);
});


it("matches snapshot", function () {
  let wrapper = shallow(<NewBoxForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it("allows for changes in form inputs: height, width, and backgroundColor", function () {
  let wrapper = mount(<NewBoxForm />);
  //change height
  const heightInput = wrapper.find("#height");
  heightInput.instance().value = "100";
  heightInput.simulate("change");
  expect(wrapper.state().height).toEqual("100");
  //change width
  const widthInput = wrapper.find("#width");
  widthInput.instance().value = "100";
  widthInput.simulate("change");
  expect(wrapper.state().width).toEqual("100");
  //change backgroundColor
  const bgColorInput = wrapper.find("#backgroundColor");
  bgColorInput.instance().value = "green";
  bgColorInput.simulate("change");
  expect(wrapper.state().backgroundColor).toEqual("green");
})

it("runs a mocked function on submit", function () {
  const submitFn = jest.fn();
  let wrapper = mount(<NewBoxForm addNewBox={submitFn} />);
  const form = wrapper.find("form");

  form.simulate("submit");
  expect(submitFn).toHaveBeenCalled();
})

it("resets state on submission", function () {
  const submitFn = jest.fn();

  let wrapper = mount(<NewBoxForm addNewBox={submitFn} />);
  //get all our elements
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

  expect(wrapper.state()).toEqual({ width: '', height: '', backgroundColor: '' });
})