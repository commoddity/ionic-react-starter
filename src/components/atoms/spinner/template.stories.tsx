import { Meta, Story } from "@storybook/react";
import { SpinnerTemplate, SpinnerTemplateProps } from "./template";

export default {
  title: "Design System/Atoms/Button",
  component: SpinnerTemplate,
} as Meta;

const AtomStory: Story<SpinnerTemplateProps> = (args) => (
  <SpinnerTemplate {...args} />
);

export const Spinner = AtomStory.bind({});
Spinner.args = {};
