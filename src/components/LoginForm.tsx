import React from "react";
import Button from "./Button";

const LoginForm = () => {
	return (
		<div className="flex flex-col">
			<div className="bg-primary-900 text-primary-300 m-4 p-5 text-center h-auto rounded-xl font-main underline underline-offset-4">
				<h1 className="text-2xl mt-6 mb-3">Table: 1</h1>
				<input
					type="text"
					placeholder="Name"
					className="mt-6 h-12 w-full rounded-xl p-2  text-primary-900 placeholder-primary-900"
				/>
				<input
					type="number"
					placeholder="Phone number"
					className="mt-6 mb-3 h-12 w-full rounded-xl p-2 text-primary-900 placeholder-primary-900"
				/>
			</div>
			<Button className="w-5/6 mx-auto mt-6" />
		</div>
	);
};

export default LoginForm;
