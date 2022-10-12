import { render, screen, cleanup  } from "@testing-library/react";
import House from "../components/House";
import { HouseType } from "../types/House.types";
import { BrowserRouter } from 'react-router-dom';

afterEach(() => {
    cleanup();
})

test('should render house component', () => {
    let house: HouseType = {
        id: 1,
        url: 'api/houses/1',
        region: 'some region',
        name: 'house name',
        coatOfArms: 'list of arms',
    }

    render(<BrowserRouter><House house={house} /></BrowserRouter>);

    const houseElement = screen.getByTestId('house-1');
    expect(houseElement).toBeInTheDocument();
    expect(houseElement).toHaveTextContent('house name');
})