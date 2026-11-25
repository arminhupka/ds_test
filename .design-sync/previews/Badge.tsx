import { Badge } from '@mini-ui/base';

// A row of the variant table: the props on the left, the badge they make on the right.
const Row = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <>
    <code style={{ fontFamily: 'monospace', fontSize: 'var(--ds_font-size-sm)', lineHeight: 'var(--ds_line-height-sm)', color: 'var(--ds_color-text-secondary)', whiteSpace: 'nowrap' }}>{name}</code>
    <div>{children}</div>
  </>
);

const TABLE = { display: 'grid', gridTemplateColumns: 'max-content auto', alignItems: 'center', gap: 'var(--ds_space-3) var(--ds_space-4)' } as const;

export const Default = () => <Badge>3</Badge>;

export const Intents = () => (
  <div style={TABLE}>
    <Row name='intent="positive"'><Badge intent="positive">3</Badge></Row>
    <Row name='intent="neutral"'><Badge intent="neutral">3</Badge></Row>
  </div>
);
