import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import {
    describe, expect, test, vi,
} from 'vitest';
import { ButtonGroup } from './ButtonGroup';

describe('ButtonGroup', () => {
    test('is a named group of buttons', () => {
        render(
            <ButtonGroup.Root aria-label="Save options">
                <ButtonGroup.Item>Save</ButtonGroup.Item>
                <ButtonGroup.Item aria-label="More options">v</ButtonGroup.Item>
            </ButtonGroup.Root>
        );

        expect(screen.getByRole('group', { name: 'Save options' })).toBeInTheDocument();
        expect(screen.getAllByRole('button')).toHaveLength(2);
    });

    test('each segment is an action of its own', async () => {
        const onSave = vi.fn();
        const onMore = vi.fn();

        render(
            <ButtonGroup.Root aria-label="Save options">
                <ButtonGroup.Item onClick={onSave}>Save</ButtonGroup.Item>
                <ButtonGroup.Item aria-label="More options" onClick={onMore}>v</ButtonGroup.Item>
            </ButtonGroup.Root>
        );

        await userEvent.click(screen.getByRole('button', { name: 'Save' }));

        expect(onSave).toHaveBeenCalledTimes(1);
        expect(onMore).not.toHaveBeenCalled();
    });

    test('a disabled segment does not act', async () => {
        const onMore = vi.fn();

        render(
            <ButtonGroup.Root aria-label="Save options">
                <ButtonGroup.Item>Save</ButtonGroup.Item>
                <ButtonGroup.Item aria-label="More options" disabled onClick={onMore}>v</ButtonGroup.Item>
            </ButtonGroup.Root>
        );

        await userEvent.click(screen.getByRole('button', { name: 'More options' }));

        expect(onMore).not.toHaveBeenCalled();
    });

    test('forwards a ref to the group and to a segment', () => {
        const groupRef = createRef<HTMLDivElement>();
        const itemRef = createRef<HTMLButtonElement>();

        render(
            <ButtonGroup.Root ref={groupRef}>
                <ButtonGroup.Item ref={itemRef}>Save</ButtonGroup.Item>
            </ButtonGroup.Root>
        );

        expect(groupRef.current).toBeInstanceOf(HTMLDivElement);
        expect(itemRef.current).toBeInstanceOf(HTMLButtonElement);
    });

    test('a segment outside a group throws a clear error', () => {
        const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);

        expect(() => render(<ButtonGroup.Item>Save</ButtonGroup.Item>)).toThrow('ButtonGroup.Item must be rendered inside ButtonGroup.Root.');

        error.mockRestore();
    });
});
