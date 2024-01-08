/* eslint-disable react/display-name */
import React, { TextareaHTMLAttributes, forwardRef, useId } from "react";
import { Label } from "./Label";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id = "", label = "", placeholder = "", ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <Label className="textLabel" htmlFor={id}>
          {label}
        </Label>
        <textarea placeholder={placeholder} ref={ref} id={id} {...props} />
      </div>
    );
  },
);
