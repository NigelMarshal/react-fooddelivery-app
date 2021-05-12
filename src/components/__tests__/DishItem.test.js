import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import renderer from "react-test-renderer";
import DishItem from '../Dishes/DishItem/DishItem';
import dishes from './mocks/dishes'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

afterEach(() => {
    cleanup();
});

test('Should render dish Items', () => {
    render(<DishItem menuItems={dishes[0]} />);
    const dishItems = screen.getByTestId('dishItems');
    expect(dishItems).toBeInTheDocument();
})

test('Dishes should render its content details', () => {
    const component = renderer.create(
        <DishItem menuItems={dishes[0]} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Dishes should show the discounted price', () => {
    render(
        <DishItem menuItems={dishes[0]} />
    );
    const price = screen.getByText("AED 50")
    expect(price).toBeInTheDocument()
})








test('Dishes should NOT show discounted price if there is none', () => {
    const wrapper = shallow(<DishItem menuItems={dishes[1]} />)
    expect(wrapper.find('.line-through').exists()).toBe(false);
})
