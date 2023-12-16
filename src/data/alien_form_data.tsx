import { FormInputObject, FormSelectInputObject, FormTextAreaInputObject, InitialValue }
from "../components/W12MForm";

export const formTextInput: Array<FormInputObject> = [
    {
    title: "Species Name",
    role: "speciesName",
    regex: /^[a-z]{3,23}$/gi,
    errorMessage: "Must be between 3 and 23 characters. No numbers or special characters allowed!"
    },
    {
    title: "Planet Name",
    role: "planetName",
    regex: /^[a-z0-9]{2,49}$/gi,
    errorMessage: "Must be between 2 and 49 characters. Numbers are allowed, but no special characters."
    },
    {
    title: "Number of Beings",
    role: "numberOfBeings",
    regex: /^[0-9]{10,}$/g,
    errorMessage: "Numbers ONLY. Must be at least 1,000,000,000"
    }
];

export const formSelectInput: Array<FormSelectInputObject> = [
    {
    title: "What is 2 + 2?",
    role: "mathsAnswer",
    regex: /^4{1}$/,
    errorMessage: `Error: "4" must be selected`,
    options: ["Not 4", "0", "4", "99", "4 million"]
    }
];

export const formTextAreaInput: Array<FormTextAreaInputObject> = [
    {
    title: "Reasons For Sparing",
    role: "reasonsForSparing",
    regex: /^.{17,153}$/gi,
    errorMessage: "Must be between 17 and 153 characters",
    size: {rows: 5, cols: 20}
    }
];

export const formDataArray = [...formTextInput, ...formSelectInput, ...formTextAreaInput];
export const initialValues: InitialValue = formDataArray.reduce
((acc, field) => {return {...acc, [field.role]: ""}}, {});