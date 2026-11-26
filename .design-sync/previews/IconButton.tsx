import { IconButton } from '@mini-ui/base';

// A row of the variant table: the props on the left, the button they make on the right.
const Row = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <>
    <code style={{ fontFamily: 'monospace', fontSize: 'var(--ds_font-size-sm)', lineHeight: 'var(--ds_line-height-sm)', color: 'var(--ds_color-text-secondary)', whiteSpace: 'nowrap' }}>{name}</code>
    <div>{children}</div>
  </>
);

const TABLE = { display: 'grid', gridTemplateColumns: 'max-content auto', alignItems: 'center', gap: 'var(--ds_space-3) var(--ds_space-4)' } as const;

const SIZES = { sm: 'calc(16rem / 12)', md: 'calc(20rem / 12)' } as const;

// The icons: the design system has no icon set of its own. Each takes the color of the button's text.
const MoreIcon = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <svg aria-hidden fill="currentColor" height={SIZES[size]} viewBox="0 0 20 20" width={SIZES[size]}>
    <circle cx="4.5" cy="10" r="1.75" />
    <circle cx="10" cy="10" r="1.75" />
    <circle cx="15.5" cy="10" r="1.75" />
  </svg>
);

const CloseIcon = () => (
  <svg aria-hidden fill="none" height={SIZES.md} viewBox="0 0 20 20" width={SIZES.md}>
    <path d="M5 5 15 15M15 5 5 15" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
  </svg>
);

// The `filled` variant, the default.
export const Default = () => <IconButton aria-label="More actions"><MoreIcon /></IconButton>;

// White icon, for a button on a solid colored surface.
export const Inverse = () => (
  <div style={{ display: 'inline-flex', padding: 'var(--ds_space-3)', backgroundColor: 'var(--ds_color-action-positive)' }}>
    <IconButton aria-label="Close" variant="inverse"><CloseIcon /></IconButton>
  </div>
);

// The `filled`, `ghost` and `outline` variants in both sizes, each with the icon of its size.
export const Variants = () => (
  <div style={TABLE}>
    {(['filled', 'ghost', 'outline'] as const).flatMap((variant) => (['sm', 'md'] as const).map((size) => (
      <Row key={`${variant}-${size}`} name={`variant="${variant}" size="${size}"`}>
        <IconButton aria-label="More actions" variant={variant} size={size}><MoreIcon size={size} /></IconButton>
      </Row>
    )))}
  </div>
);

export const Disabled = () => <IconButton aria-label="More actions" disabled><MoreIcon /></IconButton>;
