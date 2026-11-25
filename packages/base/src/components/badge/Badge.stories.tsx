import { VariantTable } from '@storybook-local/variants/VariantTable.tsx';
import { Badge } from './Badge';

import type { Meta, StoryObj } from '@storybook/react-vite';

const INTENTS = [{ intent: 'positive' }, { intent: 'neutral' }] as const;

const meta = {
    title: 'Badge',
    component: Badge,
    args: {
        children: '3',
    },
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Intents: Story = {
    render: (args) => (
        <VariantTable rows={INTENTS}>
            {(row) => <Badge {...args} {...row} />}
        </VariantTable>
    ),
};

export {
    Default,
    Intents,
};

export default meta;
