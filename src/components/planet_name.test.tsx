import { render, screen } from '@testing-library/react';
import { PlanetName } from './planet_name';
import { fireEvent } from '@testing-library/react';

test('renders form label for planet name', () => {

	const requiredProps = {
		planetName: "Mars",
		onChangePlanetName: () => {}
	};
	render(<PlanetName {...requiredProps}/>);

	const labelText = screen.getByText(
		/Planet Name/i
	);
	expect(labelText).toBeInTheDocument();
});

test('Planet name Input field exists', async () => {
    //Arrange
	const requiredProps = {
		planetName: "",
		onChangePlanetName: () => {}
	};
	//Act
	render(<PlanetName {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Planet name input field displays value passed in through props', async () => {
    //Arrange
	const requiredProps = {
		planetName: "Mars",
		onChangePlanetName: () => {}
	};
	//Act
	render(<PlanetName {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
	//Assert
	expect(inputField.value).toBe("Mars");
});

test('Planet name input field calls its onChange function', async () => {
    //Arrange
	const mockSubmit = jest.fn();
	const requiredProps = {
		planetName: "",
		onChangePlanetName: mockSubmit
	};
	//Act
	render(<PlanetName {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
	//Assert
	if (inputField) {
		fireEvent.change(inputField, {target: {value: 'M'}})
	}
	expect(mockSubmit).toBeCalled();
});
