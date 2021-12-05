import { Meta, Story } from "@storybook/react";
import { Tab3Template } from "./template";

export default {
  title: "Page",
  component: Tab3Template,
} as Meta;

const AtomStory: Story = (args) => <Tab3Template {...args} title="Hi Hello I am Tab 3" />;

export const Page = AtomStory.bind({});
Page.args = {
  title: "Hi Hello There" as const,
};
