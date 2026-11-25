import { Avatar } from '@mini-ui/base';

// A row of the variant table: the props on the left, the avatar they make on the right.
const Row = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <>
    <code style={{ fontFamily: 'monospace', fontSize: 'var(--ds_font-size-sm)', lineHeight: 'var(--ds_line-height-sm)', color: 'var(--ds_color-text-secondary)', whiteSpace: 'nowrap' }}>{name}</code>
    <div>{children}</div>
  </>
);

const TABLE = { display: 'grid', gridTemplateColumns: 'max-content auto', alignItems: 'center', gap: 'var(--ds_space-3) var(--ds_space-4)' } as const;

const IMAGE_SRC = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%236c80a3'/%3E%3C/svg%3E";

export const Default = () => <Avatar name="John Doe" />;

// An active person gets a dot in the positive color, an inactive one a dot in the border color.
export const Statuses = () => (
  <div style={TABLE}>
    <Row name='status="none"'><Avatar name="John Doe" status="none" /></Row>
    <Row name='status="active"'><Avatar name="John Doe" status="active" /></Row>
    <Row name='status="inactive"'><Avatar name="John Doe" status="inactive" /></Row>
  </div>
);

// A picture that loads replaces the initials.
export const WithImage = () => <Avatar name="John Doe" src={IMAGE_SRC} />;
