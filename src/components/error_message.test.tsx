import { render, screen } from '@testing-library/react';
import { ErrorMessage, ErrorMessageProps } from './error_message';

test('Error message Must be between 17 and 153... is displayed when passed in through props', () => {

	const requiredProps: ErrorMessageProps = {
		message: "Must be between 17 and 153 characters"
	}

	render(<ErrorMessage {...requiredProps}/>);
	
	const text = screen.getByText(
		/Must be between 17 and 153 characters/i
	);
	expect(text).toBeInTheDocument();
});

test('Error Numbers ONLY... is displayed when passed in through props', () => {

	const requiredProps: ErrorMessageProps = {
		message: "Numbers ONLY. Must be at least 1,000,000,000"
	}

	render(<ErrorMessage {...requiredProps}/>);
	
	const text = screen.getByText(
		/Numbers ONLY. Must be at least 1,000,000,000/i
	);
	expect(text).toBeInTheDocument();
});

