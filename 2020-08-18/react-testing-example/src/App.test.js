import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import data from './data';

describe('App', () => {
  it('debería mostrar 1era página el iniciarse', () => {
    const { getByText } = render(<App />);
    const el = getByText(data[0].text);
    expect(el.style.color).toBe('rgb(255, 255, 255)');
    expect(el).toBeInTheDocument();
  });

  it('debería mostrar siguiente pantalla al hacer click', () => {
    const { getByText } = render(<App />);
    const el = getByText(data[0].text);

    userEvent.click(el);

    expect(getByText(data[1].text)).toBeInTheDocument();
  });

  it('debería mostrar 1era pantalla al hacer click en la última pantalla', () => {
    const { getByText } = render(<App />);

    data.forEach((item) => {
      const el = getByText(item.text);
      expect(el).toBeInTheDocument();
      userEvent.click(el);
    });

    expect(getByText(data[0].text).textContent).toBe(data[0].text);
  });
});
