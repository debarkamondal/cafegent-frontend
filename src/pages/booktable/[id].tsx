import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import {
	setTable,
	setPhone,
	setName,
	setAuthToken,
} from "@/redux/sessionSlice";
import { useRouter } from "next/router";
import BookTableHeader from "@/components/booktable/BookTableHeader";
import Image from "next/image";

const BookTable = () => {
	const host = process.env.NEXT_PUBLIC_BACKEND_URL;

	const session = useSelector((state: RootState) => state.session);
	const router = useRouter();
	const [output, setOutput]: any = useState(); // using state to keep the output of the qrcode component streamlined for reuse
	const dispatch = useDispatch();

	const handlePhoneUpdate = (event: any): void => {
		dispatch(setPhone(event.target.value));
	};
	const handleNameUpdate = (event: any): void => {
		dispatch(setName(event.target.value));
	};

	const handleClick = async () => {
		const url: string = `${host}/table/book`;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: router.query.id,
				phoneNo: session.phone,
				name: session.name,
			}),
		});
		let data = await response.json();
		if ("authToken" in data) {
			dispatch(setAuthToken(data.authToken));
			localStorage.setItem("authToken", data.authToken);
			router.push("/menu");
		}
	};

	const verifyQrCode = async () => {
		const url: string = `${host}/table/check/${router.query.id}`;
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		setOutput(data);
	};

	useEffect(() => {
		if (router.isReady) verifyQrCode();
	}, [router.isReady]);
	useEffect(() => {
		if (output) {
			if (output.name === "JsonWebTokenError") dispatch(setName("error"));
			else
				dispatch(setTable({ table: output.table, shopName: output.shopName }));
			console.log(output);
		}
	}, [output]);

	// Rendering qrSanner component if not scanned already

	return (
		<>
			<BookTableHeader />
			<div>
				{!output && (
					<Image
						className="m-auto"
						src={"/assets/spinner.gif"}
						alt="loading"
						height={75}
						width={75}
					/>
				)}
				{output && (
					<h1 className="text-center mt-4 underline underline-offset-2">
						{output.shopName}
					</h1>
				)}
				{output && !output.message && (
					<div className="text-center mt-1">Table: {output.table}</div>
				)}
			</div>
			{output?.message && (
				<div className="text-center m-4 text-red-500 bg-red-200 p-2 rounded-md">
					<b>Error :</b> {output.message}
				</div>
			)}
			<div className="flex flex-col mt-6 justify-center">
				<h2 className="text-center m-2">Please fill up the details</h2>
				<div className="bookingInfo flex flex-col m-2">
					<input
						className="m-2 border border-green-200 rounded-md p-2"
						type="text"
						placeholder="Enter your name"
						onChange={handleNameUpdate}
					/>
					<input
						className="m-2 border border-green-200 rounded-md p-2"
						type="text"
						placeholder="Enter your Phone number"
						onChange={handlePhoneUpdate}
					/>
				</div>
			</div>
			<br />
			{/* <div className="flex justify-center w-full"> */}
			<button
				onClick={handleClick}
				className="bg-green-400 fixed left-0 bottom-0 rounded-full w-11/12 m-4 h-14"
			>
				Book
			</button>
			{/* </div> */}
		</>
	);
	// Rendering the scanned table no and text feild for phone number input
};

export default BookTable;
