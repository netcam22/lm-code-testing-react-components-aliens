import { useState, ChangeEvent, MouseEvent} from 'react';
import W12MHeader from './W12MHeader';
import {TextInput} from './text_input';
import { SelectInput } from './select_input';
import { ReasonsForSparing } from './reasons_for_sparing';
import { Output } from './output';
import { SubmitButton } from './submit_button';
import { formTextInput, formSelectInput, formTextAreaInput, formDataArray, initialValues} from '../data/alien_form_data';
import { validateTextInput } from "../validate/validate_text_input";
export interface InputProps {
	title: string;
	role: string;
	value: string;
	regex: RegExp;
	message: string;
	submitted: boolean;
	validate: (title:string, regex: RegExp, value: string, message: string) => string;
}

export type FormInputObject = {
    title: string;
    role: string;
    regex: RegExp;
    errorMessage: string;
}
export type InitialValue = {[key: string]: string};

const W12MForm = () => {
	
	const [input, setInput] = useState({...initialValues});
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
		setSubmitted(true);
	}

	function handleChange(event: ChangeEvent<HTMLInputElement> | 
		ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) {
		setInput((currentData) =>
			Object.assign({}, currentData, {
				[event.target.id]: event.target.value,
			})
		)
	}

	function validateTextField(title:string, regex: RegExp, value: string, message: string) {
		if (submitted) {
		const errorMessage  = validateTextInput(title, regex, value, message)
				.reduce((acc: string, message: string) => acc+" and "+message, "")
				.replace(" and ", "");
		return errorMessage;
		}
		return "";
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<div className = "col-50-left">

			{formTextInput.map((field: FormInputObject, i: number) => 

			<TextInput 
				key = {i.toString()}
				title = {formTextInput[i].title} 
				regex={formTextInput[i].regex} 
				message = {formTextInput[i].errorMessage}
				value={input[formTextInput[i].role]} 
				onChange={handleChange} 
				submitted={submitted}
				validate = {validateTextField} 
				role = {formTextInput[i].role} 
			/>)
			}

			{formSelectInput.map((field: FormInputObject, i: number) => 

				<SelectInput
				key = {i.toString()}
				title = {formSelectInput[i].title} 
				regex={formSelectInput[i].regex} 
				message = {formSelectInput[i].errorMessage}
				value={input[formSelectInput[i].role]} 
				onChange={handleChange} 
				submitted={submitted}
				validate = {validateTextField} 
				role = {formTextInput[i].role} 
				/>)
			}

			<ReasonsForSparing reasonsForSparing={input.reasonsForSparing} onChangeReasonsForSparing={handleChange} />

			<SubmitButton buttonText = "Submit Application" onSubmitHandler = {handleSubmit}/>
			</div>

			{formDataArray.map((field: FormInputObject, i: number) => 
			<Output 
				key = {i.toString()}
				title = {formDataArray[i].title} 
				value = {input[formDataArray[i].role]} 
				message = {formDataArray[i].errorMessage}
				role = {formDataArray[i].role} 
				regex={formDataArray[i].regex} 
				validate = {validateTextField} submitted={submitted}/>
			)}
		</section>	
	);
};
export default W12MForm;
