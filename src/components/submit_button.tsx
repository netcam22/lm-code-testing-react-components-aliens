import { MouseEventHandler } from "react";

interface SubmitButtonProps {
	buttonText: string;
	onSubmitHandler: MouseEventHandler<HTMLButtonElement>;
}

export const SubmitButton : React.FC<SubmitButtonProps> = ({buttonText, onSubmitHandler}) => (
    <>
		<button role="submitButton" onClick={onSubmitHandler}>{buttonText}</ button>
    </> 
	);