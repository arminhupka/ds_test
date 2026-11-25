import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { TranslationsContext } from '#src/components/translations-context/index.ts';
import { Avatar } from './Avatar';

describe('Avatar', () => {
    test('is one image named after the person', () => {
        render(<Avatar name="John Doe" />);

        expect(screen.getByRole('img', { name: 'John Doe' })).toBeInTheDocument();
    });

    test('shows the initials in place of a missing picture', () => {
        render(<Avatar name="John Doe" />);

        expect(screen.getByText('JD')).toBeInTheDocument();
    });

    test('announces the status after the name', () => {
        render(<Avatar name="John Doe" status="active" />);

        expect(screen.getByRole('img', { name: 'John Doe, active' })).toBeInTheDocument();
    });

    test('announces an inactive person', () => {
        render(<Avatar name="John Doe" status="inactive" />);

        expect(screen.getByRole('img', { name: 'John Doe, inactive' })).toBeInTheDocument();
    });

    test('takes the status text from the translations when the application provides them', () => {
        render(
            <TranslationsContext translations={{ '{{name}}, active': '{{name}}, aktywny' }}>
                <Avatar name="Jan Kowalski" status="active" />
            </TranslationsContext>
        );

        expect(screen.getByRole('img', { name: 'Jan Kowalski, aktywny' })).toBeInTheDocument();
    });
});
