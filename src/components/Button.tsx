"use client";
import React, { FC } from "react";

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: FC<buttonProps> = ({ ...props }) => {
	return <button {...props}>Book Table</button>;
};

export default Button;
