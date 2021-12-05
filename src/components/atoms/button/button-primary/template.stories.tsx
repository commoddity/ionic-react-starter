import { Meta, Story } from "@storybook/react";
import { PrimaryButtonTemplate, PrimaryButtonTemplateProps } from "./template";

export default {
  title: "Design System/Atoms/Button/Primary",
  component: PrimaryButtonTemplate,
} as Meta;

const AtomStory: Story<PrimaryButtonTemplateProps> = (args) => (
  <div className="max-w-sm">
    <PrimaryButtonTemplate {...args} />
  </div>
);

export const Small = AtomStory.bind({});
Small.args = {
  label: "Button",
  size: "sm",
  color: "blue",
  brightness: 500,
};

export const Medium = AtomStory.bind({});
Medium.args = {
  label: "Button",
  size: "md",
  color: "red",
  brightness: 500,
};

export const Large = AtomStory.bind({});
Large.args = {
  label: "Button",
  size: "lg",
  color: "gray",
  brightness: 500,
};

export const SignUp = AtomStory.bind({});
SignUp.args = {
  label: "Sign up",
  size: "md",
  color: "red",
  brightness: 500,
};
