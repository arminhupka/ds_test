import { ButtonGroup } from '@mini-ui/base';

// A row of the variant table: the props on the left, the group they make on the right.
const Row = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <>
    <code style={{ fontFamily: 'monospace', fontSize: 'var(--ds_font-size-sm)', lineHeight: 'var(--ds_line-height-sm)', color: 'var(--ds_color-text-secondary)', whiteSpace: 'nowrap' }}>{name}</code>
    <div>{children}</div>
  </>
);

const TABLE = { display: 'grid', gridTemplateColumns: 'max-content auto', alignItems: 'center', gap: 'var(--ds_space-3) var(--ds_space-4)' } as const;

// The arrow of the second segment: it takes the size and color of the button's text.
const ChevronDown = () => (
  <svg aria-hidden fill="none" height="1em" viewBox="0 0 16 16" width="1em">
    <path d="M3.5 6 8 10.5 12.5 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

export const Default = () => (
  <ButtonGroup.Root aria-label="Label">
    <ButtonGroup.Item>Button</ButtonGroup.Item>
    <ButtonGroup.Item aria-label="More options"><ChevronDown /></ButtonGroup.Item>
  </ButtonGroup.Root>
);

// Every variant with every intent.
export const Variants = () => (
  <div style={TABLE}>
    {['primary', 'secondary'].flatMap((variant) => ['positive', 'danger', 'neutral', 'automation'].map((intent) => (
      <Row key={`${variant}-${intent}`} name={`variant="${variant}" intent="${intent}"`}>
        <ButtonGroup.Root aria-label="Label" variant={variant as 'primary' | 'secondary'} intent={intent as 'positive' | 'danger' | 'neutral' | 'automation'}>
          <ButtonGroup.Item>Button</ButtonGroup.Item>
          <ButtonGroup.Item aria-label="More options"><ChevronDown /></ButtonGroup.Item>
        </ButtonGroup.Root>
      </Row>
    )))}
  </div>
);

export const Small = () => (
  <ButtonGroup.Root aria-label="Label" size="sm">
    <ButtonGroup.Item>Button</ButtonGroup.Item>
    <ButtonGroup.Item aria-label="More options"><ChevronDown /></ButtonGroup.Item>
  </ButtonGroup.Root>
);

// The arrow segment is disabled, so the group shows one active and one inactive segment.
export const Disabled = () => (
  <ButtonGroup.Root aria-label="Label">
    <ButtonGroup.Item>Button</ButtonGroup.Item>
    <ButtonGroup.Item aria-label="More options" disabled><ChevronDown /></ButtonGroup.Item>
  </ButtonGroup.Root>
);

// The label segment is loading: its label is hidden and a spinner turns over it.
export const Loading = () => (
  <ButtonGroup.Root aria-label="Label">
    <ButtonGroup.Item loading>Button</ButtonGroup.Item>
    <ButtonGroup.Item aria-label="More options"><ChevronDown /></ButtonGroup.Item>
  </ButtonGroup.Root>
);
