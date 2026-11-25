import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, test } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
    test('shows a title and a description', () => {
        render(
            <Card.Root>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Description>Dolor sit amet.</Card.Description>
            </Card.Root>
        );

        expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
        expect(screen.getByText('Dolor sit amet.')).toBeInTheDocument();
    });

    test('passes native attributes to the root, so it can be a named region', () => {
        render(<Card.Root aria-label="Summary" role="region">Content</Card.Root>);

        expect(screen.getByRole('region', { name: 'Summary' })).toHaveTextContent('Content');
    });

    test('forwards a ref to the root div', () => {
        const ref = createRef<HTMLDivElement>();

        render(<Card.Root ref={ref}>Content</Card.Root>);

        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    test('renders every surface and every tinted intent', () => {
        render(
            <>
                <Card.Root variant="subtle">subtle</Card.Root>
                <Card.Root intent="automation">automation</Card.Root>
                <Card.Root intent="positive">positive</Card.Root>
                <Card.Root intent="warning">warning</Card.Root>
                <Card.Root intent="danger">danger</Card.Root>
            </>
        );

        ['subtle', 'automation', 'positive', 'warning', 'danger'].forEach((text) => {
            expect(screen.getByText(text)).toBeInTheDocument();
        });
    });
});
