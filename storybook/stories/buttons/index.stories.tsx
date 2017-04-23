import {action, storiesOf} from "@kadira/storybook";
import {text, withKnobs} from "@kadira/storybook-addon-knobs";

import {Button} from "ui-widgets-ts";
import * as React from "react";

const stories: any = storiesOf("Bootstrap", module);
stories.addDecorator(withKnobs);

stories.addWithInfo("Button", "Demo bootstrap buttons", () => (
    <div>
        <Button type="danger"
                onClick={action("clicked")}>
            {text("Label", "danger Button")}
        </Button>
        <Button type="info"
                onClick={action("clicked")}>
            {text("Label", "info Button")}
        </Button>
    </div>
));

