import { render, screen, cleanup } from '@testing-library/react'
import Dishes from '../Dishes/Dishes';

afterEach(() => {
    cleanup();
});

test('Should render the Dishes component', () => {
    render(<Dishes />);
    const dishesComponent = screen.getByTestId('dishes');
    expect(dishesComponent).toBeInTheDocument();
})