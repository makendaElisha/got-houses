import { render, screen, cleanup  } from "@testing-library/react";
import { HouseType } from "../types/House.types";
import { BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";

afterEach(() => {
    cleanup();
})

test('should render home component', () => {
    let houses: HouseType[] = [
        {
            url: "api/houses/1",
            name: "House Algood",
            region: "The Westerlands",
            coatOfArms: "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
        },
        {
            url: "api/houses/2",
            name: "House Allyrion of Godsgrace",
            region: "Dorne",
            coatOfArms: "Gyronny Gules and Sable, a hand couped Or",
        },
        {
            url: "api/houses/3",
            name: "House Amber",
            region: "The North",
            coatOfArms: "",
        },
    ]

    render(<BrowserRouter><Home houses={houses} /></BrowserRouter>);

    const houseElement = screen.getByTestId('houses-list');
    expect(houseElement).toBeInTheDocument();
    expect(houseElement).toHaveTextContent('House Algood');
    expect(houseElement).toHaveTextContent('House Allyrion of Godsgrace');
    expect(houseElement).toHaveTextContent('House Amber');
})