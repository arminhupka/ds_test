import { VariantTable } from '@storybook-local/variants/VariantTable.tsx';
import { fn } from 'storybook/test';
import { Checkbox } from './Checkbox';

import type { Meta, StoryObj } from '@storybook/react-vite';

const CHECKED_ROWS = [{ defaultChecked: false }, { defaultChecked: true }] as const;

const SIZE_ROWS = [{ size: 'sm' }, { size: 'md' }] as const;

const meta = {
    title: 'Checkbox',
    component: Checkbox.Root,
    subcomponents: {
        Indicator: Checkbox.Indicator,
    },
    argTypes: {
        size: { control: 'select', options: ['sm', 'md'] },
    },
    args: {
        'aria-label': 'Label',
        onCheckedChange: fn(),
    },
    render: (args) => (
        <Checkbox.Root {...args}>
            <Checkbox.Indicator />
        </Checkbox.Root>
    ),
} satisfies Meta<typeof Checkbox.Root>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Checked: Story = {
    args: { defaultChecked: true },
};

/** A parent option whose children are only partly selected. */
const Indeterminate: Story = {
    args: { indeterminate: true },
};

/** Disabled, unchecked and checked. */
const Disabled: Story = {
    args: { disabled: true },
    render: (args) => (
        <VariantTable rows={CHECKED_ROWS}>
            {(row) => (
                <Checkbox.Root {...args} {...row}>
                    <Checkbox.Indicator />
                </Checkbox.Root>
            )}
        </VariantTable>
    ),
};

/** Both sizes, checked. */
const Sizes: Story = {
    args: { defaultChecked: true },
    render: (args) => (
        <VariantTable rows={SIZE_ROWS}>
            {(row) => (
                <Checkbox.Root {...args} {...row}>
                    <Checkbox.Indicator />
                </Checkbox.Root>
            )}
        </VariantTable>
    ),
};

/** Checked in the automation color, for anything the Agent or auto-fill does or suggests. */
const Automation: Story = {
    args: { defaultChecked: true, accent: 'automation' },
};

export {
    Default,
    Checked,
    Automation,
    Indeterminate,
    Disabled,
    Sizes,
};

export default meta;
