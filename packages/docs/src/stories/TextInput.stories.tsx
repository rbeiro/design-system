import type { StoryObj, Meta } from "@storybook/react";
import { TextInput, TextInputProps } from "@rbeiro-ui/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {},
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your name",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "col.com/",
  },
};
