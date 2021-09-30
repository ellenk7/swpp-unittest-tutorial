import React from "react";
import { shallow } from "enzyme";
import Calendar from "./Calendar";

const stubTodos = [
  {
    id: 1,
    title: "TODO_TEST_TITLE_1",
    done: false,
    year: 2021,
    month: 8,
    date: 1,
  },
  {
    id: 2,
    title: "TODO_TEST_TITLE_2",
    done: false,
    year: 2021,
    month: 9,
    date: 15,
  },
  {
    id: 3,
    title: "TODO_TEST_TITLE_3",
    done: true,
    year: 2021,
    month: 8,
    date: 30,
  },
];

describe("<Calendar />", () => {
  it("should render calendar", () => {
    const component = shallow(<Calendar />);
    const wrapper = component.find(".Calendar");
    expect(wrapper.length).toBe(1);
  });

  it("should set dates according to year and month", () => {
    const component = shallow(
      <Calendar year={2021} month={9} todos={stubTodos} />
    );
    const wrapper = component.find(".date");
    expect(wrapper.length).toBe(30);
  });

  it("should show tasks", () => {
    const component = shallow(
      <Calendar year={2021} month={9} todos={stubTodos} />
    );
    const wrapper = component.find(".todoTitle");
    expect(wrapper.length).toBe(2);
  });

  it("shoud handle clicking done", () => {
    const mockClick = jest.fn();
    const component = shallow(
      <Calendar year={2021} month={9} todos={stubTodos} clickDone={mockClick} />
    );
    const wrapper = component.find(".todoTitle.done");
    wrapper.simulate("click");
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
