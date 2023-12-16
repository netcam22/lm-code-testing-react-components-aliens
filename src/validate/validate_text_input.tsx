	
export const validateTextInput = 
(title: string, regex: RegExp, value: string, message: string): Array<string> => {

	// needs to return an array of error messages
	// or an empty array if there aren't any
	const errorArray : Array<string> = [];
	if (value === "") {
		errorArray.push(`${title} required`);
	}
	else {
		if (!value.match(regex)) {
			errorArray.push(message);
		}
	}
	return errorArray;
};