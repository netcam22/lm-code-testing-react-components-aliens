import { render, screen } from '@testing-library/react';
import { ReasonsForSparing } from './reasons_for_sparing';
import { fireEvent } from '@testing-library/react';

test('renders form label for reasons for sparing', () => {

	const requiredProps = {
		reasonsForSparing: "Because we are a special species",
		onChangeReasonsForSparing: () => {}
	};
	render(<ReasonsForSparing {...requiredProps}/>);

	const labelText = screen.getByText(
		/Reasons For Sparing/i
	);
	expect(labelText).toBeInTheDocument();
});


test('Species name Input field exists', async () => {
    //Arrange
	const requiredProps = {
		reasonsForSparing: "",
		onChangeReasonsForSparing: () => {}
	};
	//Act
	render(<ReasonsForSparing {...requiredProps}/>);
	const inputField = screen.getByLabelText("Reasons For Sparing");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Reasons For Sparing input field displays value passed in through props', async () => {
    //Arrange
	const requiredProps = {
		reasonsForSparing: "Because we are a special species",
		onChangeReasonsForSparing: () => {}
	};
	//Act
	render(<ReasonsForSparing {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Reasons For Sparing");
	//Assert
	expect(inputField.value).toBe("Because we are a special species");
});

test('Reasons For Sparing input field call its onChange function', async () => {
    //Arrange
	const mockSubmit = jest.fn();
	const requiredProps = {
		reasonsForSparing: "",
		onChangeReasonsForSparing: mockSubmit
	};
	//Act
	render(<ReasonsForSparing {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Reasons For Sparing");
	//Assert
	if (inputField) {
		fireEvent.change(inputField, {target: {value: 'Z'}})
	}
	expect(mockSubmit).toBeCalled();
});
