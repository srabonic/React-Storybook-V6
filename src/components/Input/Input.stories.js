import Input from './Input'
import React from 'react'

export default {
  title: 'Form/Input',
  component: Input
}

export const Large = () => <Input size="large" placeholder="Large Size" />
export const Medium = () => <Input size="medium" placeholder="Medium Size" />
export const Small = () => <Input size="small" placeholder="Small Size" />

Small.storyName= 'Small Input'