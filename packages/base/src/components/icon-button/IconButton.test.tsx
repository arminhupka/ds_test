import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import {
    describe, expect, test, vi,
} from 'vitest';
import { IconButton } from './IconButton';
import { CloseIcon } from './IconButton.mocks';

describe('IconButton', () => {
    test('is a button named by its aria-label, as the icon carries no text', () => {
        render(<IconButton aria-label="Close"><CloseIcon /></IconButton>);

        expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    });

    test('calls onClick when clicked', async () => {
        const onClick = vi.fn();

        render(<IconButton aria-label="Close" onClick={onClick}><CloseIcon /></IconButton>);

        await userEvent.click(screen.getByRole('button', { name: 'Close' }));

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('does not act while disabled', async () => {
        const onClick = vi.fn();

        render(<IconButton aria-label="Close" disabled onClick={onClick}><CloseIcon /></IconButton>);

        await userEvent.click(screen.getByRole('button', { name: 'Close' }));

        expect(onClick).not.toHaveBeenCalled();
    });

    test('forwards a ref to the button', () => {
        const ref = createRef<HTMLButtonElement>();

        render(<IconButton aria-label="Close" ref={ref}><CloseIcon /></IconButton>);

        expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    test('renders every variant and size', () => {
        render(
            <>
                {(['filled', 'ghost', 'outline', 'inverse'] as const).map((variant) => (
                    <IconButton aria-label={variant} key={variant} variant={variant}><CloseIcon /></IconButton>
                ))}
                <IconButton aria-label="small" size="sm"><CloseIcon size="sm" /></IconButton>
            </>
        );

        expect(screen.getAllByRole('button')).toHaveLength(5);
    });
});
