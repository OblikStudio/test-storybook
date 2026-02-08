import addonDocs from "@storybook/addon-docs";
import { definePreview } from "@storybook/nextjs";

export default definePreview({
  addons: [addonDocs()],
});
