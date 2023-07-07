"use client";
import React from "react";
<<<<<<< HEAD
import { setName, setPhone } from "@/redux/sessionSlice";
import { useAppDispatch } from "@/redux/hooks";
=======
import Button from "./Button";
>>>>>>> 10769399a50d1195ee5fee0d69f764a34a6d08d9

const LoginForm = () => {
	const dispatch = useAppDispatch();
	const handleNameUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setName(event.target.value));
	};
	const handlePhoneUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setPhone(parseInt(event.target.value)));
	};

	return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 10769399a50d1195ee5fee0d69f764a34a6d08d9
		</div>
	);
};

export default LoginForm;
