import React from "react";

const ErrorBanner = (props: { message: string; type: string }) => {
	let color: string;
	if (props.type === "error") color = "red";
	return (
		<div
			className={`absolute top-0 text-center m-4 p-2 bg-${color}-300 border border-${color}-600 text-${color}-900`}
		>
			<span className="font-bold">{props.type.toUpperCase()}</span>:{" "}
			{props.message}
		</div>
	);
};

export default ErrorBanner;
