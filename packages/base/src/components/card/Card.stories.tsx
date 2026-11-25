import { VariantTable } from '@storybook-local/variants/VariantTable.tsx';
import { Card } from './Card';

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';

const VARIANTS = ['default', 'subtle'] as const;
const INTENTS = ['neutral', 'automation', 'positive', 'warning', 'danger'] as const;

const meta = {
    title: 'Card',
    component: Card.Root,
    subcomponents: {
        Title: Card.Title,
        Description: Card.Description,
    },
    argTypes: {
        variant: { control: 'select', options: VARIANTS },
        intent: { control: 'select', options: INTENTS },
    },
    parameters: { layout: 'padded' },
    args: {
        children: 'Lorem ipsum dolor sit amet',
    },
} satisfies Meta<typeof Card.Root>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

// The two surfaces, then the tinted intents. A tinted card takes no variant.
const LOOKS = [
    { variant: 'default' },
    { variant: 'subtle' },
    ...INTENTS.filter((intent) => intent !== 'neutral').map((intent) => ({ intent })),
] satisfies readonly ComponentProps<typeof Card.Root>[];

/** Both variants and every tinted intent. */
const Variants: Story = {
    render: () => (
        <VariantTable rows={LOOKS}>
            {(look) => (
                <Card.Root {...look}>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Description>Dolor sit amet.</Card.Description>
                </Card.Root>
            )}
        </VariantTable>
    ),
};

/** A title and a description; children stack with an even gap. */
const WithTitle: Story = {
    args: {
        children: (
            <>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Description>Dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </>
        ),
    },
};

export {
    Default,
    Variants,
    WithTitle,
};

export default meta;
