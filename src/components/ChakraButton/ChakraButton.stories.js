import { boolean, text } from '@storybook/addon-knobs'

import { Button } from '@chakra-ui/react'
import React from 'react'

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    colorScheme: {control: 'text'},
    children: {control: 'text'},
  }
}

const Template = (args) => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
  colorScheme: 'green',
  children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
  colorScheme: 'red',
  children: 'Danger'
}

export const Log = Template.bind({})
Log.args = {
  colorScheme: 'blue',
  children: 'Log',
  onClick: () => console.log('Button clicked')
}

export const Knobs = Template.bind({})
Knobs.args = {
  colorScheme: 'blue',
  children: text('Label', 'Button Label'),
  disabled: boolean('Disabled', false)
}