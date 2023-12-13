
type FormValuesProps = {
    speciesName: string;
	planetName: string;
	numberOfBeings: string;
	mathsAnswer: string;
	reasonsForSparing: string;
	submitted: boolean;
  }

export const FormOutput: React.FC<FormValuesProps> = (props) => {

    function displayFormValues(props: FormValuesProps) {
        return (
        <>
        <p>Species Name: {props.speciesName}</p>
        <p>Planet Name: {props.planetName}</p>
        <p>Number of Beings: {props.numberOfBeings}</p>
        <p>What is 2 + 2?: {props.mathsAnswer}</p>
        <p>Reasons for Sparing: {props.reasonsForSparing}</p>
        </>
        )
    }

    return (   
    <> 
    {props.submitted && 
        <div className="col-50-right submitted">
        <h3>Your request has been submitted.</h3>
        {displayFormValues(props)}
        </div>
    }
    {!props.submitted && 
        <div className="col-50-right pending">
        <h3>Review your application before submitting:</h3>
        {displayFormValues(props)}
        </div>
    }
    </> 
    );
};