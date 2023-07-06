import React from "react";

const Button = (props: { className: string }) => {
	return (
		// <div className={`${props.className}`}>
		// </div>
		<button
			className={`p-2 h-12 rounded-xl bg-primary-900 text-primary-300 text-lg ${props.className}`}
		>
			Book Table
		</button>
	);
};

export default Button;
