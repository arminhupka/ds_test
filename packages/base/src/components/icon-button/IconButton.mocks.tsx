// Two small icons for the stories: the design system has no icon set of its own. Each takes the color of the button's text.
const SIZES = { sm: 'calc(16rem / 12)', md: 'calc(20rem / 12)' } as const;

interface MockIconProps {
    size?: keyof typeof SIZES;
}

const MoreIcon = ({ size = 'md' }: MockIconProps) => (
    <svg aria-hidden fill="currentColor" height={SIZES[size]} viewBox="0 0 20 20" width={SIZES[size]}>
        <circle cx="4.5" cy="10" r="1.75" />
        <circle cx="10" cy="10" r="1.75" />
        <circle cx="15.5" cy="10" r="1.75" />
    </svg>
);

const CloseIcon = ({ size = 'md' }: MockIconProps) => (
    <svg aria-hidden fill="none" height={SIZES[size]} viewBox="0 0 20 20" width={SIZES[size]}>
        <path d="M5 5 15 15M15 5 5 15" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
);

export { MoreIcon, CloseIcon };
