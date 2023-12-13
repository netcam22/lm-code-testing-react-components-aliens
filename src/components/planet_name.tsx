import { ChangeEventHandler } from "react";
interface PlanetNameProps {
	planetName: string;
	onChangePlanetName: ChangeEventHandler<HTMLInputElement>;
}

export const PlanetName : React.FC<PlanetNameProps> = ({planetName, onChangePlanetName}) => (
    <>
        <label htmlFor='planetName'>Planet Name</label>
        <input id='planetName'
					type='text'
					value={planetName}
					onChange={onChangePlanetName} />
    </> );