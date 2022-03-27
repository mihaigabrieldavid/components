import { LoadingStatus } from "../src/components/LoadingStatus";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("LoadingStatus", module);

stories.add(`Example`, () => <LoadingStatus />);
