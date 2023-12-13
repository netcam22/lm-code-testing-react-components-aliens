import { render, screen } from '@testing-library/react';
import { NumberOfBeings } from './number_of_beings';
import { fireEvent } from '@testing-library/react';

test('renders form label for number of beings', () => {
	const requiredProps = {
		numberOfBeings: "999",
		onChangeNumberOfBeings: () => {}
	};
	render(<NumberOfBeings {...requiredProps}/>);

	const labelText = screen.getByText(
		/Number of Beings/i
	);
	expect(labelText).toBeInTheDocument();
});

test('Number of Beings Input field exists', async () => {
    //Arrange
	const requiredProps = {
		numberOfBeings: "",
		onChangeNumberOfBeings: () => {}
	};
	//Act
	render(<NumberOfBeings {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Number of Beings");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Number of Beings input field displays value passed in through props', async () => {
    //Arrange
	const requiredProps = {
		numberOfBeings: "100000000000",
		onChangeNumberOfBeings: () => {}
	};
	//Act
	render(<NumberOfBeings {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Number of Beings");
	//Assert
	expect(inputField.value).toBe("100000000000");
});

test('Number of Beings input field calls its onChange function', async () => {
    //Arrange
	const mockSubmit = jest.fn();
	const requiredProps = {
		numberOfBeings: "",
		onChangeNumberOfBeings: mockSubmit
	};
	//Act
	render(<NumberOfBeings {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Number of Beings");
	//Assert
	if (inputField) {
		fireEvent.change(inputField, {target: {value: '1'}})
	}
	expect(mockSubmit).toBeCalled();
});
