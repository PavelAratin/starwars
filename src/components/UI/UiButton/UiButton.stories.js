import UiButton from "./UiButton";

export default {
  title: 'Ui-Kit/UiButton',
  component: UiButton
}

const Template = (args) => <UiButton {...args} />;

const props = {
  text: 'hello',
  disabled: false,
  theme: 'light'
}

export const light = Template.bind({});

light.args = {
  ...props,
  theme: 'light'
};

export const Dark = Template.bind({});

Dark.args = {
  ...props,
  theme: 'light'
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...props,
  disabled: true,
};