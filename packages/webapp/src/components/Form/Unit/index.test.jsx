import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Unit from './index';
import Test from './test';

describe.only('first test!', () => {
  test('test', async () => {
    const user = userEvent.setup();
    render(<Test />);
    const div = screen.getByText('NUMBER', { exact: false });
    expect(div).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'CLICK!' });
    expect(button).toBeEnabled();
    await user.click(button);
    expect(div).toHaveTextContent(1);
  });
});
