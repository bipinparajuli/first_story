import React from 'react'
import Button from './Button'

export default {
component:Button,
title: 'Button',
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})

Default.args={
    varient:"default",
    children:"Default",
}

export const Primary = Template.bind({})

Primary.args={
    varient:"primary",
    children:"Primary",

}

export const Secondary = Template.bind({})

Secondary.args={
    varient:"secondary",
    children:"Secondary",
}