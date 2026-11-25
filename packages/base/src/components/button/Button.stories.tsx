import { VariantTable } from '@storybook-local/variants/VariantTable.tsx';
import { fn } from 'storybook/test';
import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ButtonProps } from './Button';

const INTENTS = ['positive', 'danger', 'neutral', 'automation'] as const;

// Every look a button can take; a tertiary button has no intent.
const LOOKS: ButtonProps[] = [
    ...INTENTS.flatMap((intent) => [
        { variant: 'primary', intent },
        { variant: 'secondary', intent },
    ] satisfies ButtonProps[]),
    { variant: 'tertiary' },
];

const meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        intent: { control: 'select', options: ['positive', 'danger', 'neutral', 'automation'] },
        size: { control: 'select', options: ['sm', 'md'] },
    },
    args: {
        children: 'Button',
        onClick: fn(),
    },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const renderLooks: Story['render'] = (args) => (
    <VariantTable rows={LOOKS}>
        {(look) => (
            <Button
                {...look}
                disabled={args.disabled}
                loading={args.loading}
                onClick={args.onClick}
            >
                {args.children}
            </Button>
        )}
    </VariantTable>
);

/** Every variant with every intent it takes, compared in one snapshot. */
const Variants: Story = {
    render: renderLooks,
};

/** Every variant and intent disabled, which all look alike but the tertiary. */
const Disabled: Story = {
    args: { disabled: true },
    render: renderLooks,
};

/**
 * Every variant and intent loading: the label is hidden and a spinner turns over it.
 * Not a snapshot: the spinner turns, so the picture would differ on every run.
 */
const Loading: Story = {
    args: { loading: true },
    render: renderLooks,
    tags: ['!snapshot'],
};

const Small: Story = {
    args: { size: 'sm' },
};

/** Stretched across a block-level container, as the story frame is not centered here. */
const FullWidth: Story = {
    args: { width: 'full' },
    parameters: { layout: 'padded' },
};

export {
    Default,
    Variants,
    Disabled,
    Loading,
    Small,
    FullWidth,
};

export default meta;
