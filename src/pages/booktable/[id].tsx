import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setTable, setPhone, setName } from "@/redux/reservationSlice";
import { useRouter } from "next/router";
import BookTableHeader from "@/components/booktable/BookTableHeader";

const BookTable = () => {
	const host = process.env.NEXT_PUBLIC_BACKEND_URL;

	const reservation = useSelector((state: RootState) => state.reservation);
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
		const url: string = `${host}/api/table/book/`;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				table: reservation.table,
				phone: reservation.phone,
				name: reservation.name,
			}),
		});
		let data = await response.json();
		if ("authToken" in data) {
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
			<h1 className="text-center m-4 ">
				Please fill up while we are verifying QR code
			</h1>
			<div className="bookingInfo flex flex-col m-4">
				<input
					className="my-2"
					type="text"
					placeholder="Enter your name"
					onChange={handleNameUpdate}
				/>
				<input
					className="my-2"
					type="text"
					placeholder="Enter your Phone number"
					onChange={handlePhoneUpdate}
				/>
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
