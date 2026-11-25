import { render, screen } from '@testing-library/react';
import {
    describe, expect, test,
} from 'vitest';
import { TranslationsContext } from './TranslationsContext';
import { useTranslate } from './useTranslate';

const Label = ({ name }: { name: string }) => {
    const t = useTranslate();

    return <p>{t(name)}</p>;
};

describe('TranslationsContext', () => {
    test('gives a label the text the context holds for it', () => {
        render(
            <TranslationsContext translations={{ 'LbTest.first': 'Pierwszy' }}>
                <Label name="LbTest.first" />
            </TranslationsContext>
        );

        expect(screen.getByText('Pierwszy')).toBeInTheDocument();
    });

    test('gives a label its name when the context has no text for it', () => {
        render(
            <TranslationsContext translations={{}}>
                <Label name="LbTest.first" />
            </TranslationsContext>
        );

        expect(screen.getByText('LbTest.first')).toBeInTheDocument();
    });

    test('gives a label its name when no context is rendered', () => {
        render(<Label name="LbTest.first" />);

        expect(screen.getByText('LbTest.first')).toBeInTheDocument();
    });

    test('gives a label the nearest text when nested contexts both hold it', () => {
        render(
            <TranslationsContext translations={{ 'LbTest.first': 'Pierwszy' }}>
                <TranslationsContext translations={{ 'LbTest.first': 'Pierwsza' }}>
                    <Label name="LbTest.first" />
                </TranslationsContext>
            </TranslationsContext>
        );

        expect(screen.getByText('Pierwsza')).toBeInTheDocument();
    });

    test('gives a label the enclosing text when the nested context does not hold it', () => {
        render(
            <TranslationsContext translations={{ 'LbTest.first': 'Pierwszy' }}>
                <TranslationsContext translations={{ 'LbTest.second': 'Drugi' }}>
                    <Label name="LbTest.first" />
                </TranslationsContext>
            </TranslationsContext>
        );

        expect(screen.getByText('Pierwszy')).toBeInTheDocument();
    });
});
