import { render } from '@testing-library/react';
import Footer from '.';
import { test } from 'vitest';
import { ThemeProvider } from '../../utils/context';

describe('Footer', () => {
  test('Should render without crash', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>,
    );
  });
});
