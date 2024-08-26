<<<<<<< HEAD
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';
import Footer from '.';
import { describe, expect, test } from 'vitest';

describe('Footer', () => {
  test('should render without crashing', async () => {
=======
import { render } from '@testing-library/react';
import Footer from '.';

import { ThemeProvider } from '../../utils/context';

describe('Footer', () => {
  test('Should render without crash', async () => {
>>>>>>> 7fcf4a46212488026bb46d995858fc17f7c63a96
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>,
    );
  });
<<<<<<< HEAD

  test('should change theme', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>,
    );
    const nightModeButton = screen.getByRole('button');
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️');
    fireEvent.click(nightModeButton);
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙');
  });
=======
>>>>>>> 7fcf4a46212488026bb46d995858fc17f7c63a96
});
