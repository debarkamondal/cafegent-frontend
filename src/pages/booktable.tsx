import Qrcode from "@/components/Qrcode";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setTable, setPhone, setName } from "@/redux/reservationSlice";
import { useRouter } from "next/router";
import BookTableHeader from "@/components/booktable/BookTableHeader";

const BookTable = () => {
	const host = process.env.NEXT_PUBLIC_BACKEND_URL;
	const port = process.env.NEXT_PUBLIC_BACKEND_PORT;

	const reservation = useSelector((state: RootState) => state.reservation);
	const dispatch = useDispatch();
	const router = useRouter();
	const [output, setoutput]: any = useState(); // using state to keep the output of the qrcode component streamlined for reuse

	const handlePhoneUpdate = (event: any): void => {
		dispatch(setPhone(event.target.value));
	};
	const handleNameUpdate = (event: any): void => {
		dispatch(setName(event.target.value));
	};

	const handleClick = async () => {
		const url: string = `${host}:${port}/api/table/book/`;
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

	useEffect(() => {
		const authToken = localStorage.getItem("authToken");
		authToken ? router.push("/menu") : null;
		if (output) {
			let qrContent = JSON.parse(output);
			dispatch(setTable(qrContent.table));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
