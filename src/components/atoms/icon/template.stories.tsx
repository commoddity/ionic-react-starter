import { Meta, Story } from "@storybook/react";
import { Icon, IconProps } from ".";

export default {
  title: "Design System/Atoms/Icon",
  component: Icon,
} as Meta;

const AtomStory: Story<IconProps> = (args) => <Icon {...args} />;

export const PasswordShow = AtomStory.bind({});
PasswordShow.args = {
  variant: "passwordShow",
  size: 32,
};

export const PasswordHide = AtomStory.bind({});
PasswordHide.args = {
  variant: "passwordHide",
  size: 32,
};
