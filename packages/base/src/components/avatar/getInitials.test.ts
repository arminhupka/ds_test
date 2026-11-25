import {
    describe, expect, test,
} from 'vitest';
import { getInitials } from './getInitials';

describe('getInitials', () => {
    test('joins the first letters of the first and last word', () => {
        expect(getInitials('John Doe')).toBe('JD');
    });

    test('skips the middle words of a longer name', () => {
        expect(getInitials('Mary Ann Smith')).toBe('MS');
    });

    test('gives one letter for a single-word name', () => {
        expect(getInitials('John')).toBe('J');
    });

    test('ignores surrounding and repeated spaces', () => {
        expect(getInitials('  john   doe ')).toBe('JD');
    });

    test('upper-cases letters outside the ASCII range', () => {
        expect(getInitials('łukasz ślusarz')).toBe('ŁŚ');
    });

    test('gives an empty string for an empty name', () => {
        expect(getInitials('')).toBe('');
    });
});
