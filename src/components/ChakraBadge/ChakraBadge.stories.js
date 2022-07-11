import { Badge } from '@chakra-ui/react'
import React from 'react'

export default {
  title: 'Chakra/Badge',
  component: Badge
}

const Template = (args) => <Badge {...args} />

export const Success = Template.bind({})
Success.args = {
  colorScheme: 'green',
  children: 'Success',
  variant: 'outline'
}

export const Danger = Template.bind({})
Danger.args = {
  colorScheme: 'red',
  children: 'Danger',
  variant: 'solid'
}