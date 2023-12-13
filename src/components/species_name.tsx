import { ChangeEventHandler } from "react";
interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: ChangeEventHandler<HTMLInputElement>;
}

export const SpeciesName : React.FC<SpeciesNameProps> = ({speciesName, onChangeSpeciesName}) => (
    <>
        <label htmlFor='speciesName'>Species Name</label>
        <input id='speciesName'
					type='text'
					value={speciesName}
					onChange={onChangeSpeciesName} />
    </> );