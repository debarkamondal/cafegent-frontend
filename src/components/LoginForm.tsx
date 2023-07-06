import React from "react";

const LoginForm = () => {
	return (
		<div className="bg-primary-900 text-primary-300 m-4 p-5 flex flex-col text-center h-auto rounded-xl font-main underline underline-offset-4">
			<h1 className="text-2xl mt-6 mb-3">Table: 1</h1>
			<input
				type="text"
				placeholder="Name"
				className="mt-6 h-12 rounded-xl p-2  text-primary-900 placeholder-primary-900"
			/>
			<input
				type="number"
				placeholder="Phone number"
				className="mt-6 mb-3 h-12 rounded-xl p-2 text-primary-900 placeholder-primary-900"
			/>
		</div>
	);
};

export default LoginForm;
