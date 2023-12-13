import { render, screen } from '@testing-library/react';
import { MathsQuestion } from './maths_question';
import { fireEvent } from '@testing-library/react';

test('renders form label for maths question', () => {

	const requiredProps = {
		mathsAnswer: "4",
		onChangeMathsAnswer: () => {}
	};
	render(<MathsQuestion {...requiredProps}/>);

	const labelText = screen.getByText(
		"What is 2 + 2?"
	);
	expect(labelText).toBeInTheDocument();
});

test('Maths question Input field exists', async () => {
    //Arrange
	const requiredProps = {
		mathsAnswer: "4",
		onChangeMathsAnswer: () => {}
	};
	//Act
	render(<MathsQuestion {...requiredProps}/>);
	const selectInput: HTMLSelectElement = screen.getByLabelText("What is 2 + 2?");
	//Assert
    expect(selectInput).toBeInTheDocument();
});

test('Maths question input field displays value passed in through props', async () => {
    //Arrange
	const requiredProps = {
		mathsAnswer: "99",
		onChangeMathsAnswer: () => {}
	};
	//Act
	render(<MathsQuestion {...requiredProps}/>);
	const selectInput: HTMLSelectElement = screen.getByLabelText("What is 2 + 2?");
	//Assert
	expect(selectInput.value).toBe("99");
});

test('Maths question input field call its onChange function', async () => {
    //Arrange
	const mockSubmit = jest.fn();
	const requiredProps = {
		mathsAnswer: "",
		onChangeMathsAnswer: mockSubmit
	};
	//Act
	render(<MathsQuestion {...requiredProps}/>);
	const selectInput: HTMLSelectElement = screen.getByLabelText("What is 2 + 2?");
	//Assert
	if (selectInput) {
		fireEvent.change(selectInput, {target: {value: '4'}})
	}
	expect(mockSubmit).toBeCalled();
});
