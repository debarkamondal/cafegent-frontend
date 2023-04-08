import Qrcode from "@/components/Qrcode";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setTable, setPhone } from "@/redux/reservationSlice";
import { useRouter } from "next/router";

const BookTable = () => {
	const host = process.env.NEXT_PUBLIC_BACKEND_URL;
	const port = process.env.NEXT_PUBLIC_BACKEND_PORT;

	const reservation = useSelector((state: RootState) => state.reservation);
	const dispatch = useDispatch();
	const router = useRouter();
	const [output, setoutput]: any = useState(); // using state to keep the output of the qrcode component streamlined for reuse

	const handleUpdate = (event: any): void => {
		dispatch(setPhone(event.target.value));
	};

	const handleClick = async () => {
		const url: string = `${host}:${port}/api/table/book/`;
		const response = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				table: reservation.table,
				phone: reservation.phone,
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
	}, [output]);

	// Rendering qrSanner component if not scanned already

	return (
		<>
			<h1 className="mt-8 p-4 text-center text-4xl font-bold">Book a Table</h1>
			<div className="flex m-auto p-4 justify-evenly w-96 ">
				<div className="bg-green-300 border-4 rounded-full w-12 h-12 flex align-middle">
					<div className="m-auto">1</div>
				</div>
				<hr className="border-t-2 border-dashed border-black w-20 mt-5" />
				<div className="bg-green-300 border-4 rounded-full w-12 h-12 flex align-middle">
					<div className="m-auto">2</div>
				</div>
			</div>
			{!output ? (
				<div className="m-auto mt-6 w-max">
					<Qrcode
						className="rounded-md"
						fps={10}
						qrbox={{ width: 250, height: 250 }}
						disableFlip={false}
						output={output}
						setoutput={setoutput}
					/>
				</div>
			) : null}
			<div className="text-center flex flex-col justify-center h-60">
				<h2 className="text-2xl mb-4">Step: {!output ? 1 : 2}</h2>
				<p className="text-xl">
					{!output
						? "scan the QR code on the table to book"
						: "Confirm table number "}
				</p>
			</div>
			{output ? (
				<div className="text-lg flex flex-col justify-between text-center">
					Table : {JSON.parse(output).table}
					<input
						className="border-2 mt-6 m-auto w-10/12"
						type="text"
						onChange={handleUpdate}
						placeholder="Enter Phone number"
					/>
				</div>
			) : null}
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
