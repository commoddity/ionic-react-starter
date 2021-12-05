import { Meta, Story } from "@storybook/react";
import { Tab2Template } from "./template";

export default {
  title: "Page",
  component: Tab2Template,
} as Meta;

const AtomStory: Story = (args) => <Tab2Template {...args} title="Hi Hello I am Tab 2" />;

export const Page = AtomStory.bind({});
Page.args = {
  title: "Hi Hello There" as const,
};
