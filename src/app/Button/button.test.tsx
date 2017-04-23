import {shallow} from "enzyme";
import * as React from "react";
import {Button} from "./index";

test("Button should work", () => {
    // Render a button with type
    const btn = shallow(
        <Button type="danger">Test</Button>,
    );

    expect(btn.text()).toEqual("Test");
});
