import { Meta, Story } from "@storybook/react";
import { BaseCardTemplate, BaseCardTemplateProps } from "./template";

export default {
  title: "Design System/Molecules/Card",
  component: BaseCardTemplate,
} as Meta;

const MoleculeStory: Story<BaseCardTemplateProps> = (args) => (
  <BaseCardTemplate {...args} />
);

export const Partner = MoleculeStory.bind({});
Partner.args = {
  title: "Business Name",
};
