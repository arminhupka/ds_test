import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    describe, expect, test, vi,
} from 'vitest';
import { Button } from './Button';

describe('Button', () => {
    test('does not call onClick when clicked while loading', async () => {
        const onClick = vi.fn();

        render(<Button loading onClick={onClick}>Label</Button>);

        await userEvent.click(screen.getByRole('button', { name: 'Label' }));

        expect(onClick).not.toHaveBeenCalled();
    });

    test('marks the button as busy while loading', () => {
        render(<Button loading>Label</Button>);

        expect(screen.getByRole('button', { name: 'Label' })).toHaveAttribute('aria-busy', 'true');
    });

    test('keeps the button focusable while loading', () => {
        render(<Button loading>Label</Button>);

        const button = screen.getByRole('button', { name: 'Label' });
        button.focus();

        expect(button).toHaveFocus();
    });
});
