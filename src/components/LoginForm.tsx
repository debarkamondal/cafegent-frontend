"use client";
import React from "react";
import { setName, setPhone } from "@/redux/sessionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Button from "./Button";

const LoginForm = (props: { token: string }) => {
	const dispatch = useAppDispatch();
	const session = useAppSelector((state) => state.session);
	const handleNameUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setName(event.target.value));
	};
	const handlePhoneUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setPhone(parseInt(event.target.value)));
	};

	const bookTable = async () => {
		const host = process.env.NEXT_PUBLIC_BACKEND_URL;
		const url = `${host}/table/book`;
		const data = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				token: props.token,
				name: session.name,
				phoneNo: session.phone,
			}),
		});
	};

	return (
		<>
			<div className="bg-primary-900 text-primary-300 m-4 p-5 flex flex-col text-center h-auto rounded-xl font-main underline underline-offset-4">
				<h1 className="text-2xl mt-6 mb-3">Table: 1</h1>
				<input
					type="text"
					placeholder="Name"
					className="mt-6 h-12 rounded-xl p-2 bg-primary-100 text-primary-900 placeholder-primary-900"
					onChange={handleNameUpdate}
				/>
				<input
					type="number"
					placeholder="Phone number"
					className="mt-6 mb-3 h-12 rounded-xl p-2 bg-primary-100 text-primary-900 placeholder-primary-900"
					onChange={handlePhoneUpdate}
				/>
			</div>
			<Button
				className="flex justify-center w-5/6 mx-auto mt-6 p-2 h-12 rounded-xl bg-primary-900 text-primary-300 text-lg"
				onClick={bookTable}
			/>
		</>
	);
};

export default LoginForm;
