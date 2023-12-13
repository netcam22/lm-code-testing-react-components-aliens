import { render, screen } from '@testing-library/react';
import { SpeciesName } from './species_name';
import { fireEvent } from '@testing-library/react';

test('renders form label for species name', () => {

	const requiredProps = {
		speciesName: "Woman",
		onChangeSpeciesName: () => {}
	};
	render(<SpeciesName {...requiredProps}/>);

	const labelText = screen.getByText(
		/Species Name/i
	);
	expect(labelText).toBeInTheDocument();
});

test('Species name Input field exists', async () => {
    //Arrange
	const requiredProps = {
		speciesName: "",
		onChangeSpeciesName: () => {}
	};
	//Act
	render(<SpeciesName {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Species name input field displays value passed in through props', async () => {
    //Arrange
	const requiredProps = {
		speciesName: "Woman",
		onChangeSpeciesName: () => {}
	};
	//Act
	render(<SpeciesName {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
	expect(inputField.value).toBe("Woman");
});

test('Species name input field call its onChange function', async () => {
    //Arrange
	const mockSubmit = jest.fn();
	const requiredProps = {
		speciesName: "",
		onChangeSpeciesName: mockSubmit
	};
	//Act
	render(<SpeciesName {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
	if (inputField) {
		fireEvent.change(inputField, {target: {value: 'W'}})
	}
	expect(mockSubmit).toBeCalled();
});
