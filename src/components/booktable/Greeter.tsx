import React from "react";

const Greeter = (props: { name: string }) => {
	return (
		<>
			<div className="greeter w-full h-1/3 text-primary-900 font-main flex flex-col justify-center items-center">
				<h2 className="text-2xl font-medium">Welcome to</h2>
				<h1 className="text-4xl font-medium pt-1">{props.name}</h1>
			</div>
		</>
	);
};

export default Greeter;
