/* eslint-disable react/display-name */
import { LabelHTMLAttributes, forwardRef } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement,LabelProps>(({htmlFor='',...props },ref) => {
    return (
        <label htmlFor={htmlFor} ref={ref} {...props}></label>

    )
}
);