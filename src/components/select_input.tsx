import { ChangeEventHandler, ChangeEvent} from 'react';
import { InputProps } from "./W12MForm";
import { SelectOption } from "./select_option";
import { ErrorMessage } from './error_message';
export interface SelectInputProps extends InputProps{
	onChange: ChangeEventHandler<HTMLSelectElement> | any;
	options: Array<string>;
}

export const SelectInput : React.FC<SelectInputProps> = (props) => {

	function validateInput() {
		return props.submitted? props.validate(props.title, props.regex, props.value, props.message) : "";
	}
	const errorMessage = validateInput();

	const onChangeSelect = (errorMessage:string) => (event: ChangeEvent<HTMLSelectElement>) => {
		props.onChange(event, errorMessage);
	}

	return (
    <>
        <label htmlFor={props.role}>{props.title}</label>
        <select id={props.role} 
		value={props.value} 
		onChange={onChangeSelect(errorMessage)} >
			{props.options.map((option, index) => 
			<SelectOption key = {index.toString()} optionValue ={option} />)}
		</select>
		{errorMessage !== "" &&
		<ErrorMessage message = {errorMessage}/>
		}
    </> )
}