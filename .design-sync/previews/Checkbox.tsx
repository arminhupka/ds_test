import { Checkbox } from '@mini-ui/base';

// A row of the variant table: the props on the left, the checkbox they make on the right.
const Row = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <>
    <code style={{ fontFamily: 'monospace', fontSize: 'var(--ds_font-size-sm)', lineHeight: 'var(--ds_line-height-sm)', color: 'var(--ds_color-text-secondary)', whiteSpace: 'nowrap' }}>{name}</code>
    <div>{children}</div>
  </>
);

const TABLE = { display: 'grid', gridTemplateColumns: 'max-content auto', alignItems: 'center', gap: 'var(--ds_space-3) var(--ds_space-4)' } as const;

export const Default = () => (
  <Checkbox.Root aria-label="Label">
    <Checkbox.Indicator />
  </Checkbox.Root>
);

export const Checked = () => (
  <Checkbox.Root aria-label="Label" defaultChecked>
    <Checkbox.Indicator />
  </Checkbox.Root>
);

// A parent option whose children are only partly selected.
export const Indeterminate = () => (
  <Checkbox.Root aria-label="Label" indeterminate>
    <Checkbox.Indicator />
  </Checkbox.Root>
);

// Disabled, unchecked and checked.
export const Disabled = () => (
  <div style={TABLE}>
    <Row name="defaultChecked={false}">
      <Checkbox.Root aria-label="Label" disabled defaultChecked={false}>
        <Checkbox.Indicator />
      </Checkbox.Root>
    </Row>
    <Row name="defaultChecked={true}">
      <Checkbox.Root aria-label="Label" disabled defaultChecked>
        <Checkbox.Indicator />
      </Checkbox.Root>
    </Row>
  </div>
);

// Both sizes, checked.
export const Sizes = () => (
  <div style={TABLE}>
    <Row name='size="sm"'>
      <Checkbox.Root aria-label="Label" defaultChecked size="sm">
        <Checkbox.Indicator />
      </Checkbox.Root>
    </Row>
    <Row name='size="md"'>
      <Checkbox.Root aria-label="Label" defaultChecked size="md">
        <Checkbox.Indicator />
      </Checkbox.Root>
    </Row>
  </div>
);

// Checked in the automation color, for anything the Agent or auto-fill does or suggests.
export const Automation = () => (
  <Checkbox.Root aria-label="Label" defaultChecked accent="automation">
    <Checkbox.Indicator />
  </Checkbox.Root>
);
