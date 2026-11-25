import { render, screen } from '@testing-library/react';
import {
    describe, expect, test,
} from 'vitest';
import { TranslationsContext } from './TranslationsContext';
import { useTranslate } from './useTranslate';

const Label = ({ values }: { values?: Record<string, string | number> }) => {
    const t = useTranslate();

    return <p>{t('LbTest.greeting', values)}</p>;
};

describe('useTranslate', () => {
    test('fills the placeholders of a text with the given values', () => {
        render(
            <TranslationsContext translations={{ 'LbTest.greeting': 'Hello {{ name }}, you have {{count}} messages' }}>
                <Label values={{ name: 'John', count: 3 }} />
            </TranslationsContext>
        );

        expect(screen.getByText('Hello John, you have 3 messages')).toBeInTheDocument();
    });

    test('keeps a placeholder as written when it has no value', () => {
        render(
            <TranslationsContext translations={{ 'LbTest.greeting': 'Hello {{name}}' }}>
                <Label values={{ other: 'x' }} />
            </TranslationsContext>
        );

        expect(screen.getByText('Hello {{name}}')).toBeInTheDocument();
    });

    test('keeps the placeholders of a text when no values are given', () => {
        render(
            <TranslationsContext translations={{ 'LbTest.greeting': 'Hello {{name}}' }}>
                <Label />
            </TranslationsContext>
        );

        expect(screen.getByText('Hello {{name}}')).toBeInTheDocument();
    });
});
