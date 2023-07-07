"use client";
import React from "react";

const Button = (props: { className: string; handleClick: Function }) => {
	return (
		<button
			className={`p-2 h-12 rounded-xl bg-primary-900 text-primary-300 text-lg ${props.className}`}
			onClick={() => props.handleClick()}
		>
			Book Table
		</button>
	);
};

export default Button;
