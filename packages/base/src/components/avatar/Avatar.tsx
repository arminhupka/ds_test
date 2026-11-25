import { Avatar as BaseAvatar } from '@base-ui/react/avatar';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import '#src/styles/design-system.css';
import { useTranslate } from '#src/components/translations-context/index.ts';
import styles from './Avatar.module.css';
import { getInitials } from './getInitials';
import { labels } from './labels';

import type { AvatarRootProps as BaseAvatarRootProps } from '@base-ui/react/avatar';
import type { WithoutRenderProps } from '#src/types.ts';

const statusDot = cva(styles.status, {
    variants: {
        status: {
            active: styles.active,
            inactive: styles.inactive,
        },
    },
});

const statusLabels = {
    active: labels.userActive,
    inactive: labels.userInactive,
} as const;

type AvatarProps = Omit<WithoutRenderProps<BaseAvatarRootProps>, 'children'> & {
    /** The person's full name: announced to screen readers and turned into initials. */
    name: string;
    /** The person's picture; the initials show while it is missing, loading or failed. */
    src?: string;
    /** The person's status, shown as a dot on the circle. `none` shows no dot. */
    status?: 'none' | 'active' | 'inactive';
};

/**
 * A gray circle showing a person's picture or, in its place, their initials. The initials always come from `name`,
 * so every avatar falls back the same way. Draws its own content, so it takes no `children`.
 * It is announced as one image named after the person, with the status when there is one.
 */
const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(({
    name,
    src,
    status = 'none',
    ...rest
}, ref) => {
    const t = useTranslate();
    const label = status === 'none' ? name : t(statusLabels[status], { name });

    return (
        <BaseAvatar.Root
            className={styles.root}
            {...rest}
            ref={ref}
            aria-label={label}
            role="img"
        >
            {src !== undefined && (
                // The root already names the avatar, so the image itself stays silent.
                <BaseAvatar.Image
                    alt=""
                    className={styles.image}
                    src={src}
                />
            )}
            <BaseAvatar.Fallback
                aria-hidden
                className={styles.fallback}
            >
                {getInitials(name)}
            </BaseAvatar.Fallback>
            {status !== 'none' && (
                <span
                    aria-hidden
                    className={statusDot({ status })}
                />
            )}
        </BaseAvatar.Root>
    );
});

Avatar.displayName = 'Avatar';

export { Avatar };
export type { AvatarProps };
