import { storiesOf } from "@storybook/react";
import { PageBodySideHeader } from "../src/components/PageBodySideHeader";
import { action } from "@storybook/addon-actions";
import { addReadme } from "storybook-readme";
import { getCases, getReadmeText, getStoryName } from "./utils";

const stories = storiesOf("PageBodySideHeader", module);

stories.addDecorator(addReadme);

stories.add(`Example`, () => (
  <PageBodySideHeader
    item={{ id: "1", name: "Spațiu de lucru" }}
    initialIsPopoverOpen={false}
    items={[
      { id: "1", name: "Spațiu de lucru" },
      { id: "2", name: "Spațiu de lucru 2" },
      { id: "3", name: "Spațiu de lucru 3" },
    ]}
    noItemsMessage=""
    onClick={action("onClick")}
  />
));

stories.add(`Example 2`, () => (
  <PageBodySideHeader
    item={{ id: "1", name: "Singurul spațiu de lucru" }}
    initialIsPopoverOpen={false}
    items={[]}
    noItemsMessage="Creează un nou spațiu de lucru și o să apară aici în meniu"
    onClick={action("onClick")}
  />
));

const cases = getCases({
  items: [
    [],
    [
      { id: "1", name: "Spațiu de lucru" },
      { id: "2", name: "Spațiu de lucru 2" },
      { id: "3", name: "Spațiu de lucru 3" },
    ],
  ],
  noItemsMessage: [
    "Creează un nou spațiu de lucru și o să apară aici în meniu",
  ],
  item: [{ id: "1", name: "Spațiu de lucru" }],
  initialIsPopoverOpen: [true, false],
  onclick: [action("onclick")],
});

cases.forEach((props: any) => {
  stories.add(
    `Case ${getStoryName(props)}`,
    () => <PageBodySideHeader {...props} />,
    {
      readme: {
        sidebar: getReadmeText({ Props: props }),
      },
    }
  );
});
