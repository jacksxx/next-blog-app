import React from 'react'
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ type = 'submit', name = '', ...props }, ref) => {
        return (
            <div>
                <button
                    type={type}
                    name={name}
                    {...props}
                    ref={ref}
                >
                    {name}
                </button>
            </div>

        )
    }
);