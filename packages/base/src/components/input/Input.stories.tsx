import { fn } from 'storybook/test';
import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react-vite';

const VALUE = 'Lorem ipsum';

const meta = {
    title: 'Input',
    component: Input,
    parameters: { layout: 'padded' },
    args: {
        'aria-label': 'Label',
        placeholder: 'Placeholder',
        onValueChange: fn(),
    },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Filled: Story = {
    args: { defaultValue: VALUE },
};

/** Text longer than the field scrolls inside it instead of widening the control. */
const LongContent: Story = {
    args: { defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
    parameters: { frame: true },
};

export {
    Default,
    Filled,
    LongContent,
};

export default meta;
