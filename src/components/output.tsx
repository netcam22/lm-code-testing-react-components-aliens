
type FormValuesProps = {
    title: string;
    value: string;
    role: string;
    regex: RegExp;
    message: string;
    validate: (title:string, regex: RegExp, value: string, message: string) => string;
    submitted: boolean;
  }

export const Output: React.FC<FormValuesProps> = (props) => {

    function validateInput() {
        return props.submitted? props.validate(props.title, props.regex, props.value, props.message) : "";
    }
    const errorMessage = validateInput();
        return (
        <>
        {props.submitted && errorMessage === "" &&
         <div className="col-50-right submitted">
        <p>{props.title}: {props.value}</p>
        </div>
        }
        {props.submitted && errorMessage !== "" &&
         <div className="col-50-right pending">
        <p className = "error">{props.title}: {props.message}</p>
        </div>
        }
        </>
        )
};