import { validateInput } from "./validate_input";

describe("test validation of user input", () => {
	test('Maths answer validation returns empty array if answer is correct', () => {
		//Arrange
		const params = {
			title: "What is 2 + 2?",
			regex: [/^4{1}$/],
			value: "4",
			message: ['"4" must be selected']
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([]);
	});	

	test('Maths answer validation returns error message if answer is incorrect', () => {
		//Arrange
		const params = {
			title: "What is 2 + 2?",
			regex: [/^4{1}$/],
			value: "Not 4",
			message: ['"4" must be selected']
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([params.message[0]]);
	});	

	test('Species Name validation returns error message if input is invalid', () => {
		//Arrange
		const params = {
			title: "Species Name",
			regex: [/^[a-z]{3,23}$/gi],
			value: "F%",
			message: ["Must be between 3 and 23 characters. No numbers or special characters allowed!"]
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([params.message[0]]);
	});	

	test('Species Name validation returns empty array if input is valid', () => {
		//Arrange
		const params = {
			title: "Species Name",
			regex: [/^[a-z]{3,23}$/gi],
			value: "Fred",
			message: ["Must be between 3 and 23 characters. No numbers or special characters allowed!"]
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([]);
	});	

	test('Number of Beings validation returns error message if input is invalid', () => {
		//Arrange
		const params = {
			title: "Number of Beings",
			regex: [/^[0-9]{10,}$/g],
			value: "999999999",
			message: ["Numbers ONLY. Must be at least 1,000,000,000"]
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([params.message[0]]);
	});	

	test('Number of Beings validation returns empty array if input is valid', () => {
		//Arrange
		const params = {
			title: "Number of Beings",
			regex: [/^[0-9]{10,}$/g],
			value: "9999999999",
			message: ["Numbers ONLY. Must be at least 1,000,000,000"]
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([]);
	});	

	test('Maths questions validation returns error message if selected option is incorrect', () => {
		//Arrange
		const params = {
			title: "What is 2 + 2?",
			regex: [/^4{1}$/],
			value: "4 million",
			message: [`"4" must be selected`]
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([params.message[0]]);
	});	
});