import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    describe, expect, test, vi,
} from 'vitest';
import { Checkbox } from './Checkbox';

const renderCheckbox = (props: Partial<Parameters<typeof Checkbox.Root>[0]> = {}) => render(
    <Checkbox.Root aria-label="Label" {...props}>
        <Checkbox.Indicator />
    </Checkbox.Root>
);

describe('Checkbox', () => {
    test('is unchecked by default and toggles when clicked', async () => {
        const onCheckedChange = vi.fn();

        renderCheckbox({ onCheckedChange });

        const checkbox = screen.getByRole('checkbox', { name: 'Label' });

        expect(checkbox).not.toBeChecked();

        await userEvent.click(checkbox);

        expect(checkbox).toBeChecked();
        expect(onCheckedChange).toHaveBeenCalledWith(true, expect.anything());
    });

    test('does not toggle while disabled', async () => {
        const onCheckedChange = vi.fn();

        renderCheckbox({ disabled: true, onCheckedChange });

        await userEvent.click(screen.getByRole('checkbox', { name: 'Label' }));

        expect(onCheckedChange).not.toHaveBeenCalled();
    });

    test('reports the indeterminate state as mixed', () => {
        renderCheckbox({ indeterminate: true });

        expect(screen.getByRole('checkbox', { name: 'Label' })).toBePartiallyChecked();
    });

    test('toggles from the keyboard', async () => {
        renderCheckbox();

        await userEvent.tab();
        await userEvent.keyboard(' ');

        expect(screen.getByRole('checkbox', { name: 'Label' })).toBeChecked();
    });
});
