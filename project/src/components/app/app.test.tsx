import {render, screen} from '@testing-library/react';
import App from './app';

test('Renders app-component', () => {
  render(<App offersNumber={312}/>);
  const textElement = screen.getByText(/312 places to stay in Amsterdam/i);
  expect(textElement).toBeInTheDocument();
});
