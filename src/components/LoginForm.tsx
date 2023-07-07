"use client";
import React from "react";
import { setName, setPhone } from "@/redux/sessionSlice";
import { useAppDispatch } from "@/redux/hooks";

const LoginForm = () => {
	const dispatch = useAppDispatch();
	const handleNameUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setName(event.target.value));
	};
	const handlePhoneUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setPhone(parseInt(event.target.value)));
	};

	return (
		<div className="bg-primary-900 text-primary-300 m-4 p-5 flex flex-col text-center h-auto rounded-xl font-main underline underline-offset-4">
			<h1 className="text-2xl mt-6 mb-3">Table: 1</h1>
			<input
				type="text"
				placeholder="Name"
				className="mt-6 h-12 rounded-xl p-2  text-primary-900 placeholder-primary-900"
				onChange={handleNameUpdate}
			/>
			<input
				type="number"
				placeholder="Phone number"
				className="mt-6 mb-3 h-12 rounded-xl p-2 text-primary-900 placeholder-primary-900"
				onChange={handlePhoneUpdate}
			/>
		</div>
	);
};

export default LoginForm;
