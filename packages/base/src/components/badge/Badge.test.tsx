import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, test } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
    test('shows its content', () => {
        render(<Badge>3</Badge>);

        expect(screen.getByText('3')).toBeInTheDocument();
    });

    test('passes native attributes to the span, so it can be named for screen readers', () => {
        render(<Badge aria-label="3 selected">3</Badge>);

        expect(screen.getByLabelText('3 selected')).toHaveTextContent('3');
    });

    test('forwards a ref to the span', () => {
        const ref = createRef<HTMLSpanElement>();

        render(<Badge ref={ref}>3</Badge>);

        expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    test('renders every intent', () => {
        render(
            <>
                <Badge intent="neutral">1</Badge>
                <Badge intent="positive">2</Badge>
            </>
        );

        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
    });
});
