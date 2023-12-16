import { render, screen, fireEvent } from '@testing-library/react';
import { TextInput } from './text_input';
import { TextInputProps } from "./text_input";

test('renders form label for species name', () => {

	const requiredProps: TextInputProps = {
		title: "Species Name",
		role: "speciesName",
		value: "Woman",
		onChange: () => {},
		regex: /^[a-z]{3,23}$/gi,
		message: "",
		submitted: false,
		validate: () =>  ""
	};
	render(<TextInput {...requiredProps}/>);

	const labelText = screen.getByText(
		/Species Name/i
	);
	expect(labelText).toBeInTheDocument();
});

test('Species name Input field exists', async () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Species Name",
		role: "speciesName",
		value: "",
		onChange: () => {},
		regex: /^[a-z]{3,23}$/gi,
		message: "",
		submitted: false,
		validate: () => ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Species name input field displays value passed in through props', async () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Species Name",
		role: "speciesName",
		value: "Woman",
		onChange: () => {},
		regex: /^[a-z]{3,23}$/gi,
		message: "",
		submitted: false,
		validate: () => ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
	expect(inputField.value).toBe("Woman");
});

test('Species name input field call its onChange function', async () => {
    //Arrange
	const mockChange = jest.fn();
	const requiredProps: TextInputProps = {
		title: "Species Name",
		role: "speciesName",
		value: "",
		onChange: mockChange,
		regex: /^[a-z]{3,23}$/gi,
		message: "",
		submitted: false,
		validate: () => ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
	if (inputField) {
		fireEvent.change(inputField, {target: {value: 'W'}})
	}
	expect(mockChange).toBeCalled();
});


test('renders form label for planet name', () => {

	const requiredProps: TextInputProps = {
		title: "Planet Name",
		role: "planetName",
		value: "Mars",
		onChange: () => {},
		regex: /^[a-z0-9]{2,49}$/gi,
		message: "",
		submitted: false,
		validate: () =>  ""
	};
	render(<TextInput {...requiredProps}/>);

	const labelText = screen.getByText(
		/Planet Name/i
	);
	expect(labelText).toBeInTheDocument();
});

test('Planet name Input field exists', async () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Planet Name",
		role: "planetName",
		value: "",
		onChange: () => {},
		regex: /^[a-z0-9]{2,49}$/gi,
		message: "",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Planet name input field displays value passed in through props', async () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Planet Name",
		role: "planetName",
		value: "Mars",
		onChange: () => {},
		regex: /^[a-z0-9]{2,49}$/gi,
		message: "",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
	//Assert
	expect(inputField.value).toBe("Mars");
});

test('Planet name input field calls its onChange function', async () => {
    //Arrange
	const mockChange = jest.fn();
	const requiredProps: TextInputProps = {
		title: "Planet Name",
		role: "planetName",
		value: "",
		onChange: mockChange,
		regex: /^[a-z0-9]{2,49}$/gi,
		message: "",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
	//Assert
	if (inputField) {
		fireEvent.change(inputField, {target: {value: 'M'}})
	}
	expect(mockChange).toBeCalled();
});

test('renders form label for number of beings', () => {
	const requiredProps: TextInputProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "999",
		onChange: () => {},
		regex: /^[0-9]{10,}$/g,
		message: "",
		submitted: false,
		validate: () =>  ""
	};
	render(<TextInput {...requiredProps}/>);

	const labelText = screen.getByText(
		/Number of Beings/i
	);
	expect(labelText).toBeInTheDocument();
});

test('Number of Beings Input field exists', async () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "",
		onChange: () => {},
		regex: /^[0-9]{10,}$/g,
		message: "",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Number of Beings");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Number of Beings input field displays value passed in through props', async () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "100000000000",
		onChange: () => {},
		regex: /^[0-9]{10,}$/g,
		message: "",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Number of Beings");
	//Assert
	expect(inputField.value).toBe("100000000000");
});

test('Number of Beings input field calls its onChange function', async () => {
    //Arrange
	const mockChange = jest.fn();
	const requiredProps: TextInputProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "",
		onChange: mockChange,
		regex: /^[0-9]{10,}$/g,
		message: "",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Number of Beings");
	//Assert
	if (inputField) {
		fireEvent.change(inputField, {target: {value: '1'}})
	}
	expect(mockChange).toBeCalled();
});

