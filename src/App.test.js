import {render, screen} from '@testing-library/react';
import App from './App';

test('should render image, search input and button', () => {
    render(<App/>);
    const searchInputElement = screen.getByPlaceholderText('Search for Star Wars movies...');
    const buttonElement = screen.getByText('Search');

    expect(searchInputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});
