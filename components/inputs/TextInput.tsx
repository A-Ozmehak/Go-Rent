import React from "react";
import {Field} from "formik"

type Props = {
    as: object;
    id: string;
    name: string;
    type: any;
    variant: string;
    validate: (value: string) => void;


}

const TextInput = ({ as, id, name, type, variant, validate}: Props) => {

   
  return (
        <Field
            as={as}
            id={id}
            name={name}
            type={type}
            variant={variant}
            validate={validate}
        />
  )
};

export default TextInput;