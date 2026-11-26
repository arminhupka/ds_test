import { VariantTable } from '@storybook-local/variants/VariantTable.tsx';
import { fn } from 'storybook/test';
import { Switch } from './Switch';

import type { Meta, StoryObj } from '@storybook/react-vite';

const SIZE_ROWS = [{ size: 'sm' }, { size: 'md' }] as const;

const meta = {
    title: 'Switch',
    component: Switch.Root,
    subcomponents: {
        Thumb: Switch.Thumb,
    },
    argTypes: {
        size: { control: 'select', options: ['sm', 'md'] },
    },
    args: {
        'aria-label': 'Label',
        onCheckedChange: fn(),
    },
    render: (args) => (
        <Switch.Root {...args}>
            <Switch.Thumb />
        </Switch.Root>
    ),
} satisfies Meta<typeof Switch.Root>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Checked: Story = {
    args: { defaultChecked: true },
};

/** Both sizes, on. */
const Sizes: Story = {
    args: { defaultChecked: true },
    render: (args) => (
        <VariantTable rows={SIZE_ROWS}>
            {(row) => (
                <Switch.Root {...args} {...row}>
                    <Switch.Thumb />
                </Switch.Root>
            )}
        </VariantTable>
    ),
};

const Disabled: Story = {
    args: { disabled: true },
};

/** On in the automation color, for anything the Agent or auto-fill does or suggests. */
const Automation: Story = {
    args: { defaultChecked: true, accent: 'automation' },
};

export {
    Default,
    Automation,
    Checked,
    Sizes,
    Disabled,
};

export default meta;
