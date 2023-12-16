import { render, screen, fireEvent } from '@testing-library/react';
import { TextInput } from './text_input';
import { TextInputProps } from "./text_input";

test('renders form label for species name', () => {
	 //Arrange
	const requiredProps: TextInputProps = {
		title: "Species Name",
		role: "speciesName",
		value: "Woman",
		onChange: () => {},
		regex: /^[a-z]{3,23}$/gi,
		message: "Must be between 3 and 23 characters. No numbers or special characters allowed!",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const labelText = screen.getByText(
		/Species Name/i
	);
	//Assert
	expect(labelText).toBeInTheDocument();
});

test('Species name Input field exists', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Species Name",
		role: "speciesName",
		value: "",
		onChange: () => {},
		regex: /^[a-z]{3,23}$/gi,
		message: "Must be between 3 and 23 characters. No numbers or special characters allowed!",
		submitted: false,
		validate: () => ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Species name input field displays value passed in through props', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Species Name",
		role: "speciesName",
		value: "Woman",
		onChange: () => {},
		regex: /^[a-z]{3,23}$/gi,
		message: "Must be between 3 and 23 characters. No numbers or special characters allowed!",
		submitted: false,
		validate: () => ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
	expect(inputField.value).toBe("Woman");
});

test('Species name input field call its onChange function', () => {
    //Arrange
	const mockChange = jest.fn();
	const requiredProps: TextInputProps = {
		title: "Species Name",
		role: "speciesName",
		value: "",
		onChange: mockChange,
		regex: /^[a-z]{3,23}$/gi,
		message: "Must be between 3 and 23 characters. No numbers or special characters allowed!",
		submitted: false,
		validate: () => ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	if (inputField) {
		fireEvent.change(inputField, {target: {value: 'W'}})
	}
	//Assert
	expect(mockChange).toBeCalled();
});


test('renders form label for planet name', () => {
	//Arrange
	const requiredProps: TextInputProps = {
		title: "Planet Name",
		role: "planetName",
		value: "Mars",
		onChange: () => {},
		regex: /^[a-z0-9]{2,49}$/gi,
		message: "Must be between 2 and 49 characters. Numbers are allowed, but no special characters.",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const labelText = screen.getByText(
		/Planet Name/i
	);
	//Assert
	expect(labelText).toBeInTheDocument();
});

test('Planet name Input field exists', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Planet Name",
		role: "planetName",
		value: "",
		onChange: () => {},
		regex: /^[a-z0-9]{2,49}$/gi,
		message: "Must be between 2 and 49 characters. Numbers are allowed, but no special characters.",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Planet name input field displays value passed in through props', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Planet Name",
		role: "planetName",
		value: "Mars",
		onChange: () => {},
		regex: /^[a-z0-9]{2,49}$/gi,
		message: "Must be between 2 and 49 characters. Numbers are allowed, but no special characters.",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
	//Assert
	expect(inputField.value).toBe("Mars");
});

test('Planet name input field calls its onChange function', () => {
    //Arrange
	const mockChange = jest.fn();
	const requiredProps: TextInputProps = {
		title: "Planet Name",
		role: "planetName",
		value: "",
		onChange: mockChange,
		regex: /^[a-z0-9]{2,49}$/gi,
		message: "Must be between 2 and 49 characters. Numbers are allowed, but no special characters.",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
	if (inputField) {
		fireEvent.change(inputField, {target: {value: 'M'}})
	}
	//Assert
	expect(mockChange).toBeCalled();
});

test('renders form label for number of beings', () => {
	//Arrange
	const requiredProps: TextInputProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "999",
		onChange: () => {},
		regex: /^[0-9]{10,}$/g,
		message: "Numbers ONLY. Must be at least 1,000,000,000",
		submitted: false,
		validate: () =>  ""
	};
	render(<TextInput {...requiredProps}/>);
	//Act
	const labelText = screen.getByText(
		/Number of Beings/i
	);
	//Assert
	expect(labelText).toBeInTheDocument();
});

test('Number of Beings Input field exists', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "",
		onChange: () => {},
		regex: /^[0-9]{10,}$/g,
		message: "Numbers ONLY. Must be at least 1,000,000,000",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Number of Beings");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Number of Beings input field displays value passed in through props', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "100000000000",
		onChange: () => {},
		regex: /^[0-9]{10,}$/g,
		message: "Numbers ONLY. Must be at least 1,000,000,000",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Number of Beings");
	//Assert
	expect(inputField.value).toBe("100000000000");
});

test('Number of Beings input field calls its onChange function', () => {
    //Arrange
	const mockChange = jest.fn();
	const requiredProps: TextInputProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "",
		onChange: mockChange,
		regex: /^[0-9]{10,}$/g,
		message: "Numbers ONLY. Must be at least 1,000,000,000",
		submitted: false,
		validate: () =>  ""
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Number of Beings");
	if (inputField) {
		fireEvent.change(inputField, {target: {value: '1'}})
	}
	//Assert
	expect(mockChange).toBeCalled();
});

test('Number of Beings displays error message under input field if submitted value is invalid', () => {
    //Arrange
	const mockValidate = jest.fn();
	const requiredProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "5",
		onChange: () => {},
		regex: /^[0-9]{10,}$/g,
		message: "Numbers ONLY. Must be at least 1,000,000,000",
		submitted: true,
		validate: mockValidate
	};
	//Act
	mockValidate.mockReturnValue(["Numbers ONLY. Must be at least 1,000,000,000"]);
	render(<TextInput {...requiredProps}/>)
	//Assert
	expect(mockValidate).toBeCalled();
	expect(mockValidate()).toStrictEqual(["Numbers ONLY. Must be at least 1,000,000,000"]);
});
