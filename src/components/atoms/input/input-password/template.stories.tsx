import { Meta, Story } from "@storybook/react";
import { PasswordInputTemplate, PasswordInputTemplateProps } from "./template";

export default {
  title: "Design System/Atoms/Input/Password",
  component: PasswordInputTemplate,
} as Meta;

const AtomStory: Story<PasswordInputTemplateProps> = (args) => (
  <PasswordInputTemplate {...args} />
);

export const Empty = AtomStory.bind({});
Empty.args = {
  placeholder: "Placeholder",
  value: "",
};

export const Filled = AtomStory.bind({});
Filled.args = {
  placeholder: "Placeholder",
  value: "password",
};

export const Error = AtomStory.bind({});
Error.args = {
  placeholder: "Placeholder",
  value: "password",
  errorMessage: "Password input provided is invalid",
};
