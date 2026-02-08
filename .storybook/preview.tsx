import addonDocs from "@storybook/addon-docs";
import { definePreview } from "@storybook/nextjs";

export default definePreview({
  addons: [addonDocs()],
  parameters: {
    layout: "padded",
    // ^?
  },
  decorators: [
    (_, context) => {
      const params = context.parameters;
      //      ^?
      const layout = context.parameters.layout;
      //      ^?
      return <></>;
    },
  ],
});
