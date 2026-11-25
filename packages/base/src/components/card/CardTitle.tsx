import { forwardRef } from 'react';
import styles from './Card.module.css';

import type { ComponentPropsWithoutRef } from 'react';

type CardTitleProps = Omit<ComponentPropsWithoutRef<'div'>, 'className' | 'style'>;

/**
 * The card's title, in the body size and bold.
 */
const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>((props, ref) => (
    <div
        className={styles.title}
        {...props}
        ref={ref}
    />
));

CardTitle.displayName = 'CardTitle';

export { CardTitle };
export type { CardTitleProps };
