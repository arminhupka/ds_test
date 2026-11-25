import { Card } from '@mini-ui/base';

// A row of the variant table: the props on the left, the card they make on the right.
const Row = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <>
    <code style={{ fontFamily: 'monospace', fontSize: 'var(--ds_font-size-sm)', lineHeight: 'var(--ds_line-height-sm)', color: 'var(--ds_color-text-secondary)', whiteSpace: 'nowrap' }}>{name}</code>
    <div>{children}</div>
  </>
);

const TABLE = { display: 'grid', gridTemplateColumns: 'max-content auto', alignItems: 'center', gap: 'var(--ds_space-3) var(--ds_space-4)' } as const;

const Content = () => (
  <>
    <Card.Title>Lorem ipsum</Card.Title>
    <Card.Description>Dolor sit amet.</Card.Description>
  </>
);

export const Default = () => <Card.Root>Lorem ipsum dolor sit amet</Card.Root>;

// Both variants and every tinted intent. A tinted card takes no variant.
export const Variants = () => (
  <div style={TABLE}>
    <Row name='variant="default"'><Card.Root variant="default"><Content /></Card.Root></Row>
    <Row name='variant="subtle"'><Card.Root variant="subtle"><Content /></Card.Root></Row>
    <Row name='intent="automation"'><Card.Root intent="automation"><Content /></Card.Root></Row>
    <Row name='intent="positive"'><Card.Root intent="positive"><Content /></Card.Root></Row>
    <Row name='intent="warning"'><Card.Root intent="warning"><Content /></Card.Root></Row>
    <Row name='intent="danger"'><Card.Root intent="danger"><Content /></Card.Root></Row>
  </div>
);

// A title and a description; children stack with an even gap.
export const WithTitle = () => (
  <Card.Root>
    <Card.Title>Lorem ipsum</Card.Title>
    <Card.Description>Dolor sit amet, consectetur adipiscing elit.</Card.Description>
  </Card.Root>
);
