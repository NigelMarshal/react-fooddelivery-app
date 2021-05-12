import { render, screen, cleanup } from '@testing-library/react'
import Header from '../Header/Header'

afterEach(() => {
    cleanup();
});

test('Should render the Header', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
})