import Card from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';
import { describe, expect, test } from 'vitest';

describe('Card', () => {
  test('Should render title and image', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        />
      </ThemeProvider>,
    );
    const cardTitle = screen.getByText(/Harry/i);
    expect(cardTitle.textContent).toBe(' Harry Potter ');
  });
  test('Should add ⭐️ around title', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        />
      </ThemeProvider>,
    );
    const cardTitle = screen.getByText(/Harry/i);
    const parentNode = cardTitle.closest('div');
    fireEvent.click(parentNode);
    expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️');
  });
});
