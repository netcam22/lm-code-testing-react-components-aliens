import { ChangeEventHandler } from "react";
interface NumberOfBeingsProps {
	numberOfBeings: string;
	onChangeNumberOfBeings: ChangeEventHandler<HTMLInputElement>;
}

export const NumberOfBeings : React.FC<NumberOfBeingsProps> = ({numberOfBeings, onChangeNumberOfBeings}) => (
    <>
        <label htmlFor='numberOfBeings'>Number of Beings</label>
        <input id='numberOfBeings'
					type='text'
					value={numberOfBeings}
					onChange={onChangeNumberOfBeings} />
    </> );