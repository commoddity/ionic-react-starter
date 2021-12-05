import { Meta, Story } from "@storybook/react";
import { TextInputTemplate, TextInputTemplateProps } from "./template";

export default {
  title: "Design System/Atoms/Input/Text",
  component: TextInputTemplate,
} as Meta;

const AtomStory: Story<TextInputTemplateProps> = (args) => (
  <TextInputTemplate {...args} />
);

export const Empty = AtomStory.bind({});
Empty.args = {
  placeholder: "Placeholder",
  value: "",
};

export const Filled = AtomStory.bind({});
Filled.args = {
  placeholder: "Placeholder",
  value: "Some content...",
};

export const Error = AtomStory.bind({});
Error.args = {
  placeholder: "Placeholder",
  value: "Some content...",
  errorMessage: "Text input provided was invalid",
};
