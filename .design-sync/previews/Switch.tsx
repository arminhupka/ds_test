import { Switch } from '@mini-ui/base';

// A row of the variant table: the props on the left, the switch they make on the right.
const Row = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <>
    <code style={{ fontFamily: 'monospace', fontSize: 'var(--ds_font-size-sm)', lineHeight: 'var(--ds_line-height-sm)', color: 'var(--ds_color-text-secondary)', whiteSpace: 'nowrap' }}>{name}</code>
    <div>{children}</div>
  </>
);

const TABLE = { display: 'grid', gridTemplateColumns: 'max-content auto', alignItems: 'center', gap: 'var(--ds_space-3) var(--ds_space-4)' } as const;

export const Default = () => (
  <Switch.Root aria-label="Label">
    <Switch.Thumb />
  </Switch.Root>
);

export const Checked = () => (
  <Switch.Root aria-label="Label" defaultChecked>
    <Switch.Thumb />
  </Switch.Root>
);

// Both sizes, on.
export const Sizes = () => (
  <div style={TABLE}>
    <Row name='size="sm"'>
      <Switch.Root aria-label="Label" defaultChecked size="sm"><Switch.Thumb /></Switch.Root>
    </Row>
    <Row name='size="md"'>
      <Switch.Root aria-label="Label" defaultChecked size="md"><Switch.Thumb /></Switch.Root>
    </Row>
  </div>
);

export const Disabled = () => (
  <Switch.Root aria-label="Label" disabled>
    <Switch.Thumb />
  </Switch.Root>
);

// On in the automation color, for anything the Agent or auto-fill does or suggests.
export const Automation = () => (
  <Switch.Root aria-label="Label" defaultChecked accent="automation">
    <Switch.Thumb />
  </Switch.Root>
);
