import { VariantTable } from '@storybook-local/variants/VariantTable.tsx';
import { Avatar } from './Avatar';

import type { Meta, StoryObj } from '@storybook/react-vite';

const IMAGE_SRC = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%236c80a3'/%3E%3C/svg%3E";

const STATUSES = [{ status: 'none' }, { status: 'active' }, { status: 'inactive' }] as const;

const meta = {
    title: 'Avatar',
    component: Avatar,
    args: {
        name: 'John Doe',
    },
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

/** An active person gets a dot in the positive color, an inactive one a dot in the border color. */
const Statuses: Story = {
    render: (args) => (
        <VariantTable rows={STATUSES}>
            {(row) => <Avatar {...args} {...row} />}
        </VariantTable>
    ),
};

/** A picture that loads replaces the initials. */
const WithImage: Story = {
    args: { src: IMAGE_SRC },
};

export {
    Default,
    Statuses,
    WithImage,
};

export default meta;
