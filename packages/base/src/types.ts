/** Strips the props a Base UI re-export MUST NOT accept: `className`, `style` and `render`. */
export type WithoutRenderProps<T> = Omit<T, 'className' | 'style' | 'render'>;
