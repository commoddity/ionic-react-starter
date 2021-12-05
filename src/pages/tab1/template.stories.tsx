import { Meta, Story } from "@storybook/react";
import { Tab1Template } from "./template";

export default {
  title: "Page",
  component: Tab1Template,
} as Meta;

const AtomStory: Story = (args) => <Tab1Template {...args} title="Hi Hello I am Tab 1" />;

export const Page = AtomStory.bind({});
Page.args = {
  title: "Hi Hello There" as const,
};
