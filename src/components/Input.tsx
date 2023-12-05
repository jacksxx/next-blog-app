/* eslint-disable react/display-name */
import React, { InputHTMLAttributes, forwardRef, useId } from "react";
import { Label } from "./Label";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;  
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ type = "text", id='', label = '', placeholder='', ...props }, ref) => {
 

  return (
    <div className="flex flex-col">
      <Label className="textLabel" htmlFor={id}>{label}</Label>
      <input        
        type={type}  
        placeholder={placeholder}            
        ref={ref}  
        id={id}      
        {...props}
      />

      
    </div>
  );
}

);