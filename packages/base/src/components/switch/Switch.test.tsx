import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    describe, expect, test, vi,
} from 'vitest';
import { Switch } from './Switch';

const renderSwitch = (props: Partial<Parameters<typeof Switch.Root>[0]> = {}) => render(
    <Switch.Root aria-label="Label" {...props}>
        <Switch.Thumb />
    </Switch.Root>
);

describe('Switch', () => {
    test('is off by default and turns on when clicked', async () => {
        const onCheckedChange = vi.fn();

        renderSwitch({ onCheckedChange });

        const control = screen.getByRole('switch', { name: 'Label' });

        expect(control).not.toBeChecked();

        await userEvent.click(control);

        expect(control).toBeChecked();
        expect(onCheckedChange).toHaveBeenCalledWith(true, expect.anything());
    });

    test('can start on', () => {
        renderSwitch({ defaultChecked: true });

        expect(screen.getByRole('switch', { name: 'Label' })).toBeChecked();
    });

    test('does not change while disabled', async () => {
        const onCheckedChange = vi.fn();

        renderSwitch({ disabled: true, onCheckedChange });

        await userEvent.click(screen.getByRole('switch', { name: 'Label' }));

        expect(onCheckedChange).not.toHaveBeenCalled();
    });

    test('toggles from the keyboard', async () => {
        renderSwitch();

        await userEvent.tab();
        await userEvent.keyboard(' ');

        expect(screen.getByRole('switch', { name: 'Label' })).toBeChecked();
    });

    test('renders both sizes and the automation accent', () => {
        render(
            <>
                <Switch.Root aria-label="small" size="sm"><Switch.Thumb /></Switch.Root>
                <Switch.Root aria-label="automation" accent="automation" defaultChecked><Switch.Thumb /></Switch.Root>
            </>
        );

        expect(screen.getAllByRole('switch')).toHaveLength(2);
    });
});
