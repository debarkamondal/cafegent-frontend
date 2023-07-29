import React from "react";

const Greeter = (props: { name: string }) => {
	return (
		<>
			<div className="w-full my-28 greeter text-primary-900 font-main text-center">
				<h2 className="text-3xl font-medium">Welcome to</h2>
				<h1 className="text-5xl font-medium pt-1">{props.name}</h1>
			</div>
		</>
	);
};

export default Greeter;