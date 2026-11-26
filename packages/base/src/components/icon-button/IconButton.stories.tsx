import { VariantTable } from '@storybook-local/variants/VariantTable.tsx';
import { fn } from 'storybook/test';
import { IconButton } from './IconButton';
import { CloseIcon, MoreIcon } from './IconButton.mocks';

import type { Meta, StoryObj } from '@storybook/react-vite';

const LOOKS = (['filled', 'ghost', 'outline'] as const).flatMap((variant) => (
    (['sm', 'md'] as const).map((size) => ({ variant, size }))
));

const meta = {
    title: 'IconButton',
    component: IconButton,
    argTypes: {
        variant: { control: 'select', options: ['filled', 'ghost', 'outline', 'inverse'] },
        size: { control: 'select', options: ['sm', 'md'] },
    },
    args: {
        'aria-label': 'More actions',
        children: <MoreIcon />,
        onClick: fn(),
    },
} satisfies Meta<typeof IconButton>;

type Story = StoryObj<typeof meta>;

/** The `filled` variant, the default. */
const Default: Story = {};

/** White icon, for a button on a solid colored surface. */
const Inverse: Story = {
    args: { variant: 'inverse', 'aria-label': 'Close', children: <CloseIcon /> },
    decorators: [
        (Story) => (
            <div style={{ display: 'inline-flex', padding: 'var(--ds_space-3)', backgroundColor: 'var(--ds_color-action-positive)' }}>
                <Story />
            </div>
        ),
    ],
};

/** The `filled`, `ghost` and `outline` variants in both sizes, each with the icon of its size. */
const Variants: Story = {
    render: (args) => (
        <VariantTable rows={LOOKS}>
            {(look) => (
                <IconButton
                    {...args}
                    {...look}
                >
                    <MoreIcon size={look.size} />
                </IconButton>
            )}
        </VariantTable>
    ),
};

const Disabled: Story = {
    args: { disabled: true },
};

export {
    Default,
    Variants,
    Inverse,
    Disabled,
};

export default meta;
