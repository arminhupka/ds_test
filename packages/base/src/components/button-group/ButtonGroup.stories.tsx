import { VariantTable } from '@storybook-local/variants/VariantTable.tsx';
import { fn } from 'storybook/test';
import { ButtonGroup } from './ButtonGroup';

import type { Meta, StoryObj } from '@storybook/react-vite';

const VARIANTS = ['primary', 'secondary'] as const;
const INTENTS = ['positive', 'danger', 'neutral', 'automation'] as const;

const LOOKS = VARIANTS.flatMap((variant) => INTENTS.map((intent) => ({ variant, intent })));

const onClick = fn();

// The arrow of the second segment: it takes the size and color of the button's text.
const ChevronDown = () => (
    <svg aria-hidden fill="none" height="1em" viewBox="0 0 16 16" width="1em">
        <path d="M3.5 6 8 10.5 12.5 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
);

const meta = {
    title: 'ButtonGroup',
    component: ButtonGroup.Root,
    subcomponents: {
        Item: ButtonGroup.Item,
    },
    argTypes: {
        variant: { control: 'select', options: VARIANTS },
        intent: { control: 'select', options: INTENTS },
        size: { control: 'select', options: ['sm', 'md'] },
    },
    args: {
        'aria-label': 'Label',
    },
    render: (args) => (
        <ButtonGroup.Root {...args}>
            <ButtonGroup.Item onClick={onClick}>Button</ButtonGroup.Item>
            <ButtonGroup.Item aria-label="More options" onClick={onClick}>
                <ChevronDown />
            </ButtonGroup.Item>
        </ButtonGroup.Root>
    ),
} satisfies Meta<typeof ButtonGroup.Root>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

/** Every variant with every intent. */
const Variants: Story = {
    render: (args) => (
        <VariantTable rows={LOOKS}>
            {(look) => (
                <ButtonGroup.Root {...args} {...look}>
                    <ButtonGroup.Item onClick={onClick}>Button</ButtonGroup.Item>
                    <ButtonGroup.Item aria-label="More options" onClick={onClick}>
                        <ChevronDown />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
            )}
        </VariantTable>
    ),
};

const Small: Story = {
    args: { size: 'sm' },
};

/** The arrow segment is disabled, so the group shows one active and one inactive segment. */
const Disabled: Story = {
    render: (args) => (
        <ButtonGroup.Root {...args}>
            <ButtonGroup.Item onClick={onClick}>Button</ButtonGroup.Item>
            <ButtonGroup.Item aria-label="More options" disabled onClick={onClick}>
                <ChevronDown />
            </ButtonGroup.Item>
        </ButtonGroup.Root>
    ),
};

/**
 * The label segment is loading: its label is hidden and a spinner turns over it.
 * Not a snapshot: the spinner turns, so the picture would differ on every run.
 */
const Loading: Story = {
    render: (args) => (
        <ButtonGroup.Root {...args}>
            <ButtonGroup.Item loading onClick={onClick}>Button</ButtonGroup.Item>
            <ButtonGroup.Item aria-label="More options" onClick={onClick}>
                <ChevronDown />
            </ButtonGroup.Item>
        </ButtonGroup.Root>
    ),
    tags: ['!snapshot'],
};

export {
    Default,
    Variants,
    Small,
    Disabled,
    Loading,
};

export default meta;
