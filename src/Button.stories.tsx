import preview from "@/.storybook/preview";
import { fn } from "storybook/test";
import { Button } from "./Button";

const meta = preview.meta({
  component: Button,
});

export const Default = meta.story({
  args: {
    children: "Click me",
    onClick: fn(),
  },
});
