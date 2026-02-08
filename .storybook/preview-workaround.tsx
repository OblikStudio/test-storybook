import addonDocs from "@storybook/addon-docs";
import { definePreview } from "@storybook/nextjs";

type PreviewMeta = Parameters<(typeof preview)["meta"]>[0];
type Params = PreviewMeta["parameters"];

const preview = definePreview({
  addons: [addonDocs()],
  parameters: {
    layout: "padded",
    // ^?
  },
  decorators: [
    (_, context) => {
      const params = context.parameters as Params;
      //      ^?
      const layout = params?.layout;
      //      ^?
      return <></>;
    },
  ],
});

export default preview;
