import { ChangeEventHandler } from "react";
interface ReasonsForSparingProps {
	reasonsForSparing: string;
	onChangeReasonsForSparing: ChangeEventHandler<HTMLTextAreaElement>;
}

export const ReasonsForSparing : React.FC<ReasonsForSparingProps> = ({reasonsForSparing, onChangeReasonsForSparing}) => (
    <>
        <label htmlFor='reasonsForSparing'>Reasons For Sparing</label>
        <textarea id='reasonsForSparing'
					rows= {5}
					cols= {20}
					value={reasonsForSparing}
					onChange={onChangeReasonsForSparing} />
    </> );