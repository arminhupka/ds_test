import { Button } from '@mini-ui/base';

// A row of the variant table: the props on the left, the button they make on the right.
const Row = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <>
    <code style={{ fontFamily: 'monospace', fontSize: 'var(--ds_font-size-sm)', lineHeight: 'var(--ds_line-height-sm)', color: 'var(--ds_color-text-secondary)', whiteSpace: 'nowrap' }}>{name}</code>
    <div>{children}</div>
  </>
);

const TABLE = { display: 'grid', gridTemplateColumns: 'max-content auto', alignItems: 'center', gap: 'var(--ds_space-3) var(--ds_space-4)' } as const;

export const Default = () => <Button>Button</Button>;

export const Variants = () => (
  <div style={TABLE}>
    <Row name='variant="primary" intent="positive"'><Button variant="primary" intent="positive">Button</Button></Row>
    <Row name='variant="secondary" intent="positive"'><Button variant="secondary" intent="positive">Button</Button></Row>
    <Row name='variant="primary" intent="danger"'><Button variant="primary" intent="danger">Button</Button></Row>
    <Row name='variant="secondary" intent="danger"'><Button variant="secondary" intent="danger">Button</Button></Row>
    <Row name='variant="primary" intent="neutral"'><Button variant="primary" intent="neutral">Button</Button></Row>
    <Row name='variant="secondary" intent="neutral"'><Button variant="secondary" intent="neutral">Button</Button></Row>
    <Row name='variant="primary" intent="automation"'><Button variant="primary" intent="automation">Button</Button></Row>
    <Row name='variant="secondary" intent="automation"'><Button variant="secondary" intent="automation">Button</Button></Row>
    <Row name='variant="tertiary"'><Button variant="tertiary">Button</Button></Row>
  </div>
);

export const Disabled = () => (
  <div style={TABLE}>
    <Row name='variant="primary" intent="positive"'><Button variant="primary" intent="positive" disabled>Button</Button></Row>
    <Row name='variant="secondary" intent="positive"'><Button variant="secondary" intent="positive" disabled>Button</Button></Row>
    <Row name='variant="primary" intent="danger"'><Button variant="primary" intent="danger" disabled>Button</Button></Row>
    <Row name='variant="secondary" intent="danger"'><Button variant="secondary" intent="danger" disabled>Button</Button></Row>
    <Row name='variant="primary" intent="neutral"'><Button variant="primary" intent="neutral" disabled>Button</Button></Row>
    <Row name='variant="secondary" intent="neutral"'><Button variant="secondary" intent="neutral" disabled>Button</Button></Row>
    <Row name='variant="primary" intent="automation"'><Button variant="primary" intent="automation" disabled>Button</Button></Row>
    <Row name='variant="secondary" intent="automation"'><Button variant="secondary" intent="automation" disabled>Button</Button></Row>
    <Row name='variant="tertiary"'><Button variant="tertiary" disabled>Button</Button></Row>
  </div>
);

export const Loading = () => (
  <div style={TABLE}>
    <Row name='variant="primary" intent="positive"'><Button variant="primary" intent="positive" loading>Button</Button></Row>
    <Row name='variant="secondary" intent="positive"'><Button variant="secondary" intent="positive" loading>Button</Button></Row>
    <Row name='variant="primary" intent="danger"'><Button variant="primary" intent="danger" loading>Button</Button></Row>
    <Row name='variant="secondary" intent="danger"'><Button variant="secondary" intent="danger" loading>Button</Button></Row>
    <Row name='variant="primary" intent="neutral"'><Button variant="primary" intent="neutral" loading>Button</Button></Row>
    <Row name='variant="secondary" intent="neutral"'><Button variant="secondary" intent="neutral" loading>Button</Button></Row>
    <Row name='variant="primary" intent="automation"'><Button variant="primary" intent="automation" loading>Button</Button></Row>
    <Row name='variant="secondary" intent="automation"'><Button variant="secondary" intent="automation" loading>Button</Button></Row>
    <Row name='variant="tertiary"'><Button variant="tertiary" loading>Button</Button></Row>
  </div>
);

export const Small = () => <Button size="sm">Button</Button>;

export const FullWidth = () => <Button width="full">Button</Button>;
