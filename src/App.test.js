import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './components/home/Home';


test('must display the home page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Selecciona la Cuenta a Consultar/i);
  expect(linkElement).toBeInTheDocument();
});

// describe('<Home/>', () => {
//     let home;
//     it('Debería rederizar un "span" con el texto "Cuenta Corriente"', () => {
//         const describe = home;
//         expect(describe.find("span").at(0).text()).toBe("Cuenta Corriente");
//       });
// })