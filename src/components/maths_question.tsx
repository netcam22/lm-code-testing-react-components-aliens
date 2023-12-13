import { ChangeEventHandler } from "react";
interface MathsQuestionProps {
	mathsAnswer: string;
	onChangeMathsAnswer: ChangeEventHandler<HTMLSelectElement>;
}

export const MathsQuestion : React.FC<MathsQuestionProps> = ({mathsAnswer, onChangeMathsAnswer}) => (
    <>
        <label htmlFor='mathsAnswer'>What is 2 + 2?</label>
        <select id="mathsAnswer" value={mathsAnswer} onChange={onChangeMathsAnswer}>
			<option value="Not 4">Not 4</option>
			<option value="0">0</option>
			<option value="4">4</option>
			<option value="99">99</option>
			<option value="4 million">4 million</option>
		</select>
    </> );