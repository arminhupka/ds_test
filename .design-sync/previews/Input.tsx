import { Input } from '@mini-ui/base';

export const Default = () => <Input aria-label="Label" placeholder="Placeholder" />;

export const Filled = () => <Input aria-label="Label" placeholder="Placeholder" defaultValue="Lorem ipsum" />;

export const LongContent = () => (
  // A text longer than the field scrolls inside it. The dashed box only shows where the parent ends.
  <div style={{ resize: 'horizontal', overflow: 'auto', border: '1px dashed var(--ds_color-border-strong)', boxSizing: 'border-box', inlineSize: '160px' }}>
    <Input aria-label="Label" placeholder="Placeholder" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" />
  </div>
);
