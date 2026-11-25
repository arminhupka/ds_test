import { useId } from 'react';
import styles from './Button.module.css';

/** The brand logo: the T blinks while two arcs draw and erase around it. */
const ButtonSpinner = () => {
    // React ids contain colons, which `url(#…)` would read as a separator.
    const id = useId().replace(/:/g, '');

    return (
        <svg
            aria-hidden="true"
            className={styles.spinner}
            fill="currentColor"
            focusable="false"
            viewBox="0 0 38 24"
        >
            <defs>
                <mask id={`${id}-left`} maskUnits="userSpaceOnUse" x={-10} y={-10} width={58} height={44}>
                    <rect className={styles.sweepLeft} x={19} y={-40} width={60} height={104} fill="white" />
                </mask>
                <mask id={`${id}-right`} maskUnits="userSpaceOnUse" x={-10} y={-10} width={58} height={44}>
                    <rect className={styles.sweepRight} x={-41} y={-40} width={60} height={104} fill="white" />
                </mask>
            </defs>
            <path
                className={styles.letter}
                d="M13.05 8.52h4.4v9.4h3.4v-9.4h4.4v-2.7h-12.2z"
            />
            <path
                mask={`url(#${id}-left)`}
                d="M15.09 22.52c.55.08 1.12.15 1.69.19-.57-.05-1.15-.1-1.69-.19M4.75 14a7 7 0 0 1 3.3-5.6V3.12c-4.2 2-6.9 5.1-6.9 8.7C1.15 17 7.08 21.36 15 22.51 9 21.4 4.75 18 4.75 14"
            />
            <path
                mask={`url(#${id}-right)`}
                d="M23.06 1.29l.63.1-.34-.07ZM23.69 1.39c5.72 1.07 9.86 4.41 9.86 8.33 0 .53 0 3.23-3.37 5.73v5.3c6.8-3.18 7-7.75 7-8.73-.03-5.13-5.78-9.4-13.49-10.63"
            />
        </svg>
    );
};

export { ButtonSpinner };
