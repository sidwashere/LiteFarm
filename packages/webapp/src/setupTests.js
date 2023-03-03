// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

jest.mock('./locales/i18n', () => ({
  language: 'en',
  t: (t) => t,
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (text) => text,
  }),
}));
