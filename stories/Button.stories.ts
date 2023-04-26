import { Meta } from "@storybook/react";

import { Button } from "../lib";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default = {};
