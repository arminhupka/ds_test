import { forwardRef } from 'react';
import styles from './Card.module.css';

import type { ComponentPropsWithoutRef } from 'react';

type CardDescriptionProps = Omit<ComponentPropsWithoutRef<'div'>, 'className' | 'style'>;

/**
 * Text under the title, in the body size and the secondary color.
 */
const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>((props, ref) => (
    <div
        className={styles.description}
        {...props}
        ref={ref}
    />
));

CardDescription.displayName = 'CardDescription';

export { CardDescription };
export type { CardDescriptionProps };
